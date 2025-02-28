import Welcome from "./components/welcome.jsx";
import "./styles.css";

const name = "World";
const currentYear2 = new Date().getFullYear();

export default function App() {
  return (
    <div>
      Say hello...
      <Welcome name={name} currentYear={currentYear2} />
    </div>
  );
}
