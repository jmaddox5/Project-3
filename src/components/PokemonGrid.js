import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonGrid.css";

const PokemonGrid = ({ pokemon }) => {
  return (
    <div className="pokemon-grid">
      {pokemon.map((poke, index) => (
        <PokemonCard key={index} name={poke.name} />
      ))}
    </div>
  );
};

export default PokemonGrid;
