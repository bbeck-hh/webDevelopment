import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //let code = "?";
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
    console.log(code);
  }

  const handleReset = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
      <p>Input Code: {code}</p>
      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
