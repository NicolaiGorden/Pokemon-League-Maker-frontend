import logo from './logo.svg';
import './App.css';
import MainUI from './Components/MainUI';
import React, { useState, useEffect } from 'react';
import NavbarWidget from './Components/NavbarWidget';
import Box from './Components/Box';
import BoxFooter from './Components/BoxFooter';


function App() {

  const [leagueModeOn, setLeagueModeOn] = useState(false)
  const [boxHidden, setBoxHidden] = useState(false)

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
      <Box
        boxHidden= {boxHidden}
        setBoxHidden= {setBoxHidden}
      />
      <BoxFooter
        boxHidden= {boxHidden}
        setBoxHidden= {setBoxHidden}
      />
    </div>
  );
}

export default App;
