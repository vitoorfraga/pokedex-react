import React from "react";
import Header from "../../components/Header";

// Assets
import searchIcon from "./../../assets/icons/search.svg";

import "./styles.css";

const Home = () => {
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

      <div className="pokemon-list"></div>
    </div>
  );
};

export default Home;
