import React from "react";
import pokebola from "./../../assets/illustrations/pokebola.webp";
import "./styles.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <img src={pokebola} alt="" />

        <div className="header-intro">
          <h1>Pokedex</h1>

          <nav className="header-nav">
            <button>Página inicial</button>
            <button>Créditos</button>
          </nav>
        </div>
      </div>
      <div className="header-bottom"></div>
    </header>
  );
};

export default Header;
