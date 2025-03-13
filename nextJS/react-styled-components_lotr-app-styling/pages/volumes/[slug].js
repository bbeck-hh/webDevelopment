import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import { volumes } from "../../lib/data";

// Ändere die Hintergrundfarbe des body-Tags auf die in der data.js-Datei definierte Farbe volume.color
// Nutze props.$bgColor
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.$bgColor || "white"};
  }
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];


  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      {/* Setze props $bgColor={color} und übergebe color(createGlobalStyle)  */}
      <GlobalStyle $bgColor={color} />
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}

// Ändere die Hintergrundfarbe des body-Tags auf die in der data.js-Datei definierte Farbe volume.color

// const StyledBody = styled.body`
//   background-color: ${(props) => props.theme.color};
// `;
