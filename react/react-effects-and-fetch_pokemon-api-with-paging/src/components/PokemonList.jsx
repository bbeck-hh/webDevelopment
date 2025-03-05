import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  function handleNextPage() {
    console.log("Vorwärts");
    setPage((weiterPage) => weiterPage + 1);
  }

  function handlePreviousPage() {
    console.log("Zurück");
    setPage((zurueckPage) => zurueckPage - 1);
  }


  useEffect(() => {
    async function loadPokemon() {
      try {
        const offset = page * 20;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]); // useEffect wird bei jeder Änderung von 'page' ausgeführt

  return (
    <main>
      <button type="button" onClick={handlePreviousPage}>Previous Page</button>
      <button type="button" onClick={handleNextPage}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
