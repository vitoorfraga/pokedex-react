import React from "react";

import "./styles.css";

const PokemonCard = ({ number, name, types, picture }) => {
  const typeHandler = () => {
    if (types[1]) {
      let typeOne = types[0].type.name;
      let typeTwo = types[1].type.name;
      return typeOne + "+" + typeTwo;
    } else {
      let typeOne = types[0].type.name;
      return typeOne, "caiu no false";
    }
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-data">
        <span className="pokemon-number"># {number}</span>
        <span className="pokemon-name">{name}</span>
        {/* <div className="pokemon-types">
          {typesCount.map((type, key) => (
            <div className="type">
              <span>{type}</span>
            </div>
          ))}
        </div> */}

        <div className="pokemon-types">
          {typeHandler()}
          <div className="type">
            <span>{typeOne}</span>
          </div>
        </div>
      </div>
      <div className="pokemon-picture">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
