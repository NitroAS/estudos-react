import React from "react";
import PokemonListRedux from "../../services/redux/PokemonListRedux"

function Home() {
  return (
    <>
      <h1>Lista de Pokémons</h1>

      {/* Axios */}
      {/* <PokemonList/> */}
      {/* <PokemonListZustand/> */}

      <PokemonListRedux/>


    </>
  );
}

export default Home;
