import React, { useState, useEffect } from 'react';
import { PokemonController } from '../../networking/controllers/pokemon-controller';

function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    async function getPokemon() {
      const poke = await PokemonController.getPokemon();
      setPokemon(poke);
    }
    getPokemon();
  }, []);
  return (
    <>
      <h1>Mi pokemon:</h1>
      {pokemon?.name}
    </>
  );
}

export { Pokemon };
