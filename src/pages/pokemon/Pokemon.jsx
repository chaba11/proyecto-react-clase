import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonController } from '../../networking/controllers/pokemon-controller';

function Pokemon() {
  const { name: pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    async function getPokemon() {
      const poke = await PokemonController.getPokemon(pokemonName);
      setPokemon(poke);
    }
    getPokemon();
  }, []);
  return (
    <>
      <h1>Mi pokemon:</h1>
      <p>
        Nombre:
        {' '}
        {pokemon.name}
      </p>
      <p>
        Peso:
        {' '}
        {pokemon.weight}
      </p>
      {pokemon.abilities?.map(({ ability }) => (<p key={ability.name}>{ability.name}</p>))}
    </>
  );
}

export { Pokemon };
