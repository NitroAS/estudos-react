// src/pages/PokemonList/index.js
import React, { useEffect } from 'react';
import PokemonCard from '../../../components/card-pokemon';
import usePokemonStore from '../store';
import './styles.css'; // Estilização do card

const PokemonListZustand = () => {
  const {
    filteredPokemonList,
    searchTerm,
    error,
    fetchPokemons,
    setSearchTerm,
  } = usePokemonStore();

  // Buscar Pokémons ao montar o componente
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="pokemon-container">
      {/* Barra de pesquisa */}
      <input
        type="text"
        className="search-bar"
        placeholder="Pesquisar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="pokemon-list">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>Nenhum Pokémon encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default PokemonListZustand;
