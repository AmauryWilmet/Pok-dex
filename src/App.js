import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

const filterSearch = (pokemon, search) => {
  if (pokemon.name.includes(search)) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    ).then((resp) => resp.json().then((data) => setPokemons(data.pokemon)));
  }, []);

  return (
    <div className="column-flex p-5 text-center">
      <img src="logo.png" width="300" height="200" className="m-auto p-5" />
      <input
        className="placeholder-blue-500 w-60 focus:outline-none text-blue-500 border-b-4 border-blue-500 font-general p-3 bg-transparent"
        type="text"
        onChange={handleChange}
        placeholder="Search a name of pokemon"
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 p-5 justify-items-center">
        {pokemons
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokemon) => (
            <div className="inline-table" key={pokemon.id}>
              <Pokemon
                name={pokemon.name}
                imageUrl={pokemon.img}
                num={pokemon.num}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
