import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name }) => {
  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
      />
    </div>
  );
};

export default PokemonCard;
