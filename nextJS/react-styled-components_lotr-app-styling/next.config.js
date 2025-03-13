/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    // Finde die bestehende Regel für SVG-Importe
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Wiederverwende die bestehende Regel nur für SVG-Importe mit ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Konvertiere alle anderen *.svg-Importe in React-Komponenten
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // ignoriere *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Ändere die bestehende File-Loader-Regel, um *.svg zu ignorieren
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;