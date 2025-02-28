import "./styles.css";

function Article({ headline }) {
  return (
    <article className="article">
      <h2 className="article__title">{headline}</h2>
      <label htmlFor="articleInput">Eingabe: </label>
      <input id="articleInput" type="text" />
      <a href="https://www.perplexity.ai/?login-source=oneTapHome" className="article__link">What about a Perplexity article?</a>
      <p>Ich bin ein Paragraph</p>
    </article>
  )
}
const headline = "This is a headline";


function Pet({ name, emoji, sound, isHungry, children }) {
  return (
    <>
      <button>{name} {emoji} {sound} {isHungry ? "Feed me!" : sound}</button><br />
    </>
  );
}

export default function App() {
  return (
    <>
      <Article headline={headline} />
      <Pet name="dog" emoji="🐕‍🦺" sound="Wuff" ><h2>Children prop</h2></Pet>
      <Pet name="cat" emoji="🐈" sound="Miau" isHungry />
    </>
  );
}
