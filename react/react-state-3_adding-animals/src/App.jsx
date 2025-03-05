import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import "./styles.css";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);

    newAnimal.id = uid();
    const newAnimals = [newAnimal, ...animals];
    //const newAnimals = [{ ...newAnimal, id: uid() }, ...animals];
    setAnimals(newAnimals);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
