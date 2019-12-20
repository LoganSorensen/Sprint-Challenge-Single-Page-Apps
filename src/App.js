import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import {Link, Route} from "react-router-dom";


export default function App() {
  return (
    <main>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </div>
      <Header />
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route exact path="/">
        <WelcomePage />
      </Route>
    </main>
  );
}