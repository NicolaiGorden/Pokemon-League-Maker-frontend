import logo from './logo.svg';
import './App.css';
import MainUI from './Components/MainUI';
import React, { useState, useEffect } from 'react';


function App() {

  const [leagueModeOn, setLeagueModeOn] = useState(false)

  return (
    <div className="App">
      <MainUI
        leagueState= { leagueModeOn }
        leagueSwitch= { setLeagueModeOn }
      />
    </div>
  );
}

export default App;
