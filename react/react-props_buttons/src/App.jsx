
function Button({ color, disabled, text, onSchnurr }) {
  return (
    <button
      style={{
        backgroundColor: color,
        height: "80px",
        cursor: "pointer",
      }}
      disabled={false}
      onClick={onSchnurr}>
      {text}
    </button>
  );
}

function schnurr() {
  const p = document.createElement("p");
  p.textContent = "Schnurr!!";
  document.body.append(p);
}

export default function App() {
  const color = "#ff3399";
  const isDisabled = true;
  const text = "Toller Button";

  return (
    <>
      <Button color={color} disabled={isDisabled} text={text} onSchnurr={schnurr} />
    </>
  );
}
