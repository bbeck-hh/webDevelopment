import "./styles.css";

function Article({ headline }) {
  return (
    <article className="article">
      <h2 className="article__title">{headline}</h2>
      <label htmlFor="articleInput">Eingabe: </label>
      <input id="articleInput" type="text" />
      <a href="https://www.perplexity.ai/?login-source=oneTapHome" className="article__link">What about a Perplexity article?</a>
    </article>
  )
}
const headline = "This is a headline";

export default function App() {
  return <Article headline={headline} />;
}
