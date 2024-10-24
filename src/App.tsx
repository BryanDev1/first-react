import { useState } from "react";
import "./App.css";
import MyTitle from "./components/Mytitle";
import Pokemoncard from "./components/Pokemoncard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [Index, pokemonIndex] = useState(0);

  return (
    <div>
      <MyTitle />
      <Pokemoncard pokemon={pokemonList[Index]} />
      <NavBar
        Index={Index}
        PokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
