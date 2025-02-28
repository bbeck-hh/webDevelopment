import { Button } from "./components/Buttons";
import { schnurr } from "./utils/schnurr";

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
