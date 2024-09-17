// src/store/pokemonStore.js
import { create } from 'zustand';
import axios from 'axios';

const usePokemonStore = create((set) => ({
  pokemonList: [],
  filteredPokemonList: [],
  searchTerm: '',
  error: null,

  fetchPokemons: async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemonResults = response.data.results;

      // Para cada Pokémon, buscar os detalhes completos
      const pokemonDetailsPromises = pokemonResults.map(pokemon => axios.get(pokemon.url));
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);

      // Extraindo os dados dos Pokémons e atualizando o estado
      const fullPokemonData = pokemonDetails.map(p => p.data);
      set({
        pokemonList: fullPokemonData,
        filteredPokemonList: fullPokemonData, // Inicialmente, mostrar todos
      });
    } catch (err) {
      set({ error: 'Falha ao carregar os dados dos Pokémons.' });
    }
  },

  setSearchTerm: (value) => {
    set((state) => {
      const filteredList = state.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      return {
        searchTerm: value,
        filteredPokemonList: filteredList,
      };
    });
  },
}));

export default usePokemonStore;
