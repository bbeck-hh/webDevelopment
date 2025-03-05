import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          // API dosen't work correctly
          throw new Error(`API antwortete nicht. Status: ${response.status}`);
        }
        const data = await response.json();
        setPokemon(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Sorry, there went somethig wrong. Come back later again:', error.message);
      }
    }
    loadPokemon(); // Call the function in useEffect
  }, []);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>We are Pokemons🤣</h1>
          <ul>
            {pokemon.map((p) => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
