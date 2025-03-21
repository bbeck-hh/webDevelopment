import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ onRoll }) {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
    //console.log(`D6Button -> current rolls: ${currentRollValue}`);
    onRoll(currentRollValue);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
