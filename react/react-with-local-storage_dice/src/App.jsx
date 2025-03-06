
import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  function handleRoll(currentRollValue) {
    console.log(`App say: Rolling the dice...`);
    setRolls([{ value: currentRollValue, time: Date.now() }, ...rolls]);
    console.log(`App -> current roll value: ${currentRollValue}`);
  }

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
