import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // setCount((count) => count + 2);
    // setCount((count) => count + 1);

    let i = 0;

    do {
      setCount(count + i)
      i = i + 3;
    } while (i <= 3);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
