import { useState } from "react";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

// Fetcher außerhalb der Komponente definieren
const fetcher = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('Ein Fehler ist beim Abrufen der Daten aufgetreten.');
      error.status = res.status;
      error.info = await res.json(); // Zusätzliche Fehlerinfo vom Server
      throw error;
    }

    return await res.json();
  } catch (err) {
    throw err; // Fehler wird an SWR weitergeleitet
  }
};

export default function Character() {
  const [id, setId] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  // Ladezustand
  if (isLoading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  // Fehlerzustand
  if (error) {
    return (
      <Layout>
        <div>
          Fehler beim Laden: {error.message}
          {error.status === 404 && <p>Charakter nicht gefunden!</p>}
          {error.status && <p>Status: {error.status}</p>}
          {error.info && <p>Details: {JSON.stringify(error.info)}</p>}
        </div>
      </Layout>
    );
  }

  // Erfolgreicher Zustand
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
      <button onClick={() => setId(id + 1)}>Nächster Charakter</button>
    </Layout>
  );
}
