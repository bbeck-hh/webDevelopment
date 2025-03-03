import { useState } from "react";
import "./styles.css";

export default function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(`😁👍`);

  };

  const handleDecrement = () => {
    setCount(count - 1);
    console.log(`😁👎`);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={handleDecrement}>
          -
        </button>
        <button
          type="button"
          onClick={handleIncrement}>
          +
        </button>
      </div >
    </div >
  );
}
