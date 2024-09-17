import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../../../components/card-pokemon';
import './styles.css'; // Estilização do card


const PokemonListRedux = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Fazendo requisição para obter 20 Pokémons
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pokemonResults = response.data.results;

        // Para cada Pokémon, buscar os detalhes completos
        const pokemonDetailsPromises = pokemonResults.map(pokemon => axios.get(pokemon.url));
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        console.log(pokemonDetails);
        
        
        // Extraindo os dados dos Pokémons e atualizando o estado
        const fullPokemonData = pokemonDetails.map(p => p.data);
        setPokemonList(fullPokemonData);
        setFilteredPokemonList(fullPokemonData); // Inicialmente, mostrar todos
      } catch (err) {
        setError('Falha ao carregar os dados dos Pokémons.');
      }
    };

    fetchPokemons();
  }, []);

  // Função para lidar com o filtro de Pokémons
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredList = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemonList(filteredList);
  };

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
        // onChange={handleSearch}
      />

      <div className="pokemon-list">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>Nenhum Pokémon encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default PokemonListRedux;
