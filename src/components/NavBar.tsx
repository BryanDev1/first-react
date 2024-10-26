interface pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  Index: number;
  PokemonIndex: (index: number) => void;
  pokemonList: pokemon[];
}

function NavBar({ Index, PokemonIndex, pokemonList }: NavBarProps) {
  return (
    <>
      <p>
        {pokemonList.map((listPokemon, index) => (
          <button type="button" key={index} onClick={() => PokemonIndex(index)}>
            {listPokemon.name}
          </button>
        ))}
      </p>
    </>
  );
}

export default NavBar;

/* <button type="button" onClick={() => PokemonIndex(Index - 1)}>
Previous
</button>
<button type="button" onClick={() => PokemonIndex(Index + 1)}>
Next
</button> */
