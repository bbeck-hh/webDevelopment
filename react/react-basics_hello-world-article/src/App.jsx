import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>Ich bin der Paragraph</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}