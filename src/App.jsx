import { useState, useEffect } from "react";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState();
  const [activePokemon, setActivePokemon] = useState();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=9999"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchPokemonList();
  }, []);

  async function selectPokemon(pokemonName) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setActivePokemon(pokemonName);
      setPokemonData({
        name: data.name,
        imageFront: data.sprites.front_default,
        imageBack: data.sprites.back_default,
        id: data.id,
        height: data.height,
        attack: data.stats[1].base_stat,
        moves: data.moves,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function isEmpty(el) {
    return el === null ? false : el;
  }

  return (
    <div className="container">
      <div className="button-container">
        {pokemonList.map((pokemon) => (
          <Button
            key={pokemon.name}
            text={pokemon.name}
            btnClass={`${activePokemon === pokemon.name ? "active" : ""}`}
            onClick={() => selectPokemon(pokemon.name)}
          />
        ))}
      </div>

      {pokemonData ? (
        <Card
          name={pokemonData.name}
          imageFront={isEmpty(pokemonData.imageFront)}
          imageBack={isEmpty(pokemonData.imageBack)}
          id={pokemonData.id}
          height={pokemonData.height}
          attack={pokemonData.attack}
          moves={pokemonData.moves}
        />
      ) : (
        <p className="empty">Select a Pokemon to view its details</p>
      )}
    </div>
  );
}

export default App;
