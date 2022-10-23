import React from "react";

import "./styles.css";

const PokemonCard = ({ number, name, types, picture }) => {
  const typeHandler = () => {
    if (types[1]) {
      // console.log(types[0].type.name);
      // console.log(types[1].type.name);
      return (
        <>
          <div className="type">
            <span>{types[0].type.name}</span>
          </div>

          <div className="type">
            <span>{types[1].type.name}</span>
          </div>
        </>
      );

      types[0].type.name + " " + types[1].type.name;
    }
    return types[0].name;
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
          <div className="type">
            <span>{typeHandler()}</span>
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
