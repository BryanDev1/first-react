interface pokemon {
  name: string;
  imgSrc?: string;
}

interface Pokemonprops {
  pokemon: pokemon;
}

function Pokemoncard({ pokemon }: Pokemonprops) {
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
