import logo from './logo.svg';
import './App.css';
import MainUI from './Components/MainUI';
import React, { useState, useEffect } from 'react';
import NavbarWidget from './Components/NavbarWidget';


function App() {

  const [leagueModeOn, setLeagueModeOn] = useState(false)

  return (
    <div className="App">
      <NavbarWidget
        leagueState= { leagueModeOn }
        leagueSwitch= { setLeagueModeOn }
        text= {leagueModeOn ? "League Maker" : "Pokémon Maker"}
      />
      <MainUI
        leagueState= { leagueModeOn }
        leagueSwitch= { setLeagueModeOn }
      />
    </div>
  );
}

export default App;
