const pokemonList = [
  {
    name: "Bulbausar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "Mew",
  },
];

function Pokemoncard() {
  const pokemon = pokemonList[1];
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>what is it ?</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default Pokemoncard;
