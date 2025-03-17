import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

// Fetcher für API-Aufrufe
const fetcher = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('Ein Fehler ist beim Abrufen der Daten aufgetreten.');
      error.status = res.status;
      error.info = await res.json();
      throw error;
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query; // ID aus der URL

  const [currentId, setCurrentId] = useState(null);

  // Abruf der Listen-API für count
  const { data: listData, error: listError, isLoading: listLoading } = useSWR(
    `https://swapi.py4e.com/api/people/`,
    fetcher
  );

  // Abruf der Daten für den einzelnen Charakter
  const { data: characterData, error: characterError, isLoading: characterLoading } = useSWR(
    id ? `https://swapi.py4e.com/api/people/${id}` : null,
    fetcher
  );

  // Setze currentId, sobald id aus der URL verfügbar ist
  useEffect(() => {
    if (id && currentId === null) {
      setCurrentId(parseInt(id, 10));
    }
  }, [id, currentId]);

  // Ladezustand für beide API-Aufrufe
  if (listLoading || characterLoading || !id) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  // Fehlerzustand für die Listen-API
  if (listError) {
    return (
      <Layout>
        <div>Fehler beim Laden der Liste: {listError.message}</div>
      </Layout>
    );
  }

  // Fehlerzustand für den Charakter
  if (characterError) {
    return (
      <Layout>
        <div>
          Fehler beim Laden des Charakters: {characterError.message}
          {characterError.status === 404 && <p>Charakter nicht gefunden!</p>}
          {characterError.status && <p>Status: {characterError.status}</p>}
          {characterError.info && <p>Details: {JSON.stringify(characterError.info)}</p>}
        </div>
      </Layout>
    );
  }

  // Erfolgreicher Zustand
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <p>Gesamtzahl der Charaktere: {listData.count}</p>
        <Card
          id={currentId}
          name={characterData.name}
          height={characterData.height}
          eyeColor={characterData.eye_color}
          birthYear={characterData.birth_year}
          films={characterData.films.length}
        />
        <button
          onClick={() => {
            const nextId = currentId - 1;
            setCurrentId(nextId);
            router.push(`/characters/${nextId}`);
          }}
        >
          Vorheriger Charakter
        </button>
        <button
          onClick={() => {
            const nextId = currentId + 1;
            setCurrentId(nextId);
            router.push(`/characters/${nextId}`);
          }}
        >
          Nächster Charakter
        </button>
      </div>
    </Layout>
  );
}