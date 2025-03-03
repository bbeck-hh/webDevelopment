import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // Check that the value changes correctly.
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
