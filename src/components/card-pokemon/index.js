/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css'; // Estilização do card
// eslint-disable-next-line react/prop-types
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
      <p>Altura: {pokemon.height} decímetros</p>
      <p>Peso: {pokemon.weight} hectogramas</p>
      <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
