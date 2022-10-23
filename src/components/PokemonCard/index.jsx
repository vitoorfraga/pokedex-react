import React from "react";

import colorsTypes from "./colors.json";
import colortsCard from "./colors-card.json";
import "./styles.css";

const PokemonCard = ({ number, name, types, picture }) => {
  const typeHandler = () => {
    let listTypesName = [];
    if (types[1]) {
      let typeOne = types[0].type.name;
      let typeTwo = types[1].type.name;

      listTypesName.push(typeOne, typeTwo);

      return (
        <div className="types">
          <div style={{ background: colorsTypes[typeOne] }} className="type">
            {typeOne}
          </div>
          <div style={{ background: colorsTypes[typeTwo] }} className="type">
            {typeTwo}
          </div>
        </div>
      );
    } else {
      let typeOne = types[0].type.name;
      listTypesName = [typeOne];
      return (
        <div className="types">
          <div style={{ background: colorsTypes[typeOne] }} className="type">
            {typeOne}
          </div>
        </div>
      );
    }
  };

  let backgroundCard = colortsCard[types[0].type.name];
  console.log(backgroundCard);

  return (
    <div style={{ background: backgroundCard }} className="pokemon-card">
      <div className="pokemon-data">
        <span className="pokemon-number">#{number}</span>
        <span className="pokemon-name">{name}</span>

        <div className="pokemon-types">{typeHandler()}</div>
      </div>
      <div className="pokemon-picture">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
