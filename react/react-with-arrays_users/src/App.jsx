import React from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";
import "./styles.css";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          // Übergabe des Nutzers als Prop an das Card-Element und erstellen eines eindeutigen Schlüssels
          return <Card user={user} key={user.id} />;
        })
        }
      </div>

    </main>
  );
}
