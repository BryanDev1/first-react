import "./App.css";
import MyTitle from "./components/Mytitle";
import Pokemoncard from "./components/Pokemoncard";

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

function App() {
  return (
    <div>
      <MyTitle />
      <Pokemoncard pokemon={pokemonList[1]} />
    </div>
  );
}

export default App;
