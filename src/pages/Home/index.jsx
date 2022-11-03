import React from "react";
import Header from "../../components/Header";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

import { 
  Ampligram 
} from './ui-components';

<Ampligram />

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

      <div className="pokemon-list">
      <div>
        <h1> Teste Teste Teste</h1>
      <ActionCardWithSlot
      {/*Add content to the mainText prop*/}
        mainText={
          <div>
            <h2>Fancy Hat</h2>
            <p>A hat with a very nice feather</p>
          </div>
        }
      />
    </div>
      </div>
    </div>
  );
};



export default Home;
