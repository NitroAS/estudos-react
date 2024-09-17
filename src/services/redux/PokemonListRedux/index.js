import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, setSearchTerm } from '../store/pokemonSlice';
import PokemonCard from '../../../components/card-pokemon';
import './styles.css'; // Estilização do card

const PokemonList = () => {
  const dispatch = useDispatch();
  const { filteredPokemonList, searchTerm, error, loading } = useSelector((state) => state.pokemon);

  // Buscar Pokémons ao montar o componente
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

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
        onChange={handleSearch}
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

export default PokemonList;
