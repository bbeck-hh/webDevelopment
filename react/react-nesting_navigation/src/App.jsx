import Header from "./components/Header";
import Image from "./components/Image";
import Navigation from "./components/Navigation";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header className="header">
        <a href="#">
          <Image className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation />
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
