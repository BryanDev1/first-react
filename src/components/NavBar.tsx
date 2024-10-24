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
      <button type="button" onClick={() => PokemonIndex(Index - 1)}>
        Previous
      </button>
      <button type="button" onClick={() => PokemonIndex(Index + 1)}>
        Next
      </button>
    </>
  );
}

export default NavBar;
