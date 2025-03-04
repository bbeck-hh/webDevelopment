import React from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";
import "./styles.css";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      {/* <div className="app__card-grid">
        <Card user={USERS[0]} />
      </div> */}
      {USERS.map((user) => {
        return <Card user={user} key={user.id} />;
      })
      }
    </main>
  );
}
