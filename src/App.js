import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./api";
import PokemonGrid from "./components/PokemonGrid";
import "./styles.css";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    getPokemon();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="app-title">PokeAPI React App</h1>
      </header>
      <main>
        <PokemonGrid pokemon={pokemon} />
      </main>
      <footer className="footer">
        <p>
          Check out the code behind this website on
          <a href="https://github.com/jmaddox5/Project-3">GitHub</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
