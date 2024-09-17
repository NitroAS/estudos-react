// src/store/pokemonSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para buscar dados dos Pokémons
export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemonResults = response.data.results;

    // Para cada Pokémon, buscar os detalhes completos
    const pokemonDetailsPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url));
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    // Retornar os dados completos dos Pokémons
    return pokemonDetails.map((p) => p.data);
  }
);

// Slice do Redux
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    filteredPokemonList: [],
    searchTerm: '',
    error: null,
    loading: false,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredPokemonList = state.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload;
        state.filteredPokemonList = action.payload; // Inicialmente, mostrar todos
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.loading = false;
        state.error = 'Falha ao carregar os dados dos Pokémons.';
      });
  },
});

export const { setSearchTerm } = pokemonSlice.actions;
export default pokemonSlice.reducer;
