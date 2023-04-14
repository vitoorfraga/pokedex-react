import React from "react";

import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";

import axios from "axios";

// Assets
import searchIcon from "./../../assets/icons/search.svg";
import Pagination from "../../components/Pagination";

const Pokedex = (props) => {
  const [pokemonData, setPokemonData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);

  const onLeftClickHandler = () => {
    console.log("Volta");
  };

  const onRightClickHandler = () => {
    console.log("Avança");
  };

  React.useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    var endPoints = [];
    for (var i = 1; i < 151; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    var response = axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((res) => setPokemonData(res));
    return response;
  };

  return (
    <div>
      <Header />

      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Procure pelo seu Pokemon!"
        />
        <img src={searchIcon} alt="" />
      </div>

      <div
        className="pokemon-list"
        style={{
          maxWidth: "81.4%",
          display: "flex",
          // justifyContent: "center",
          flex: "1",
          flexWrap: "wrap",
          gap: "60px 30px",
          margin: "0 auto",
        }}
      >
        {pokemonData.map((pokemon, key) => (
          <PokemonCard
            name={pokemon.data.name}
            number={pokemon.data.id}
            key={key}
            picture={pokemon.data.sprites.other.home.front_default}
            // types={pokemon.data.types[1].type.name}
            types={pokemon.data.types}
            // typeName={pokemon.types.map((item) => item.type.name)}
          ></PokemonCard>
        ))}
      </div>

      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
      />
    </div>
  );
};

export default Pokedex;
