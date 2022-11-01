import React, { useEffect, useState } from 'react';

export default function Fetch() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(function (response) {
        return response.json();
      })
      .then(function (poke) {
        setPokemon(poke.results);
      });
  }, []);

  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon);
  return (
    <div>
      {pokemon.map((poke) => {
        return <h2 key={poke.name}> {poke.name}</h2>;
      })}
    </div>
  );
}
