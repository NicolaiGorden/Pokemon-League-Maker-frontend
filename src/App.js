import logo from './logo.svg';
import './App.css';
import MainUI from './Components/MainUI';
import React, { useState, useEffect } from 'react';
import NavbarWidget from './Components/NavbarWidget';
import Box from './Components/Box';
import BoxFooter from './Components/BoxFooter';


function App() {

  //switches 
  const [leagueModeOn, setLeagueModeOn] = useState(false)
  const [boxHidden, setBoxHidden] = useState(false)

  //reference data arrays
  const [monRef, setMonRef] = useState([])
  const [abiRef, setAbiRef] = useState([])

  //currentMon stats
  const [currentMon, setCurrentMon] = useState('bulbasaur')
  const [nickname, setNickname] = useState(currentMon)
  const [currentAbility, setCurrentAbility] = useState('overgrow')

  //fetch

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1008')
        .then(res => res.json())
        .then((data) => {
            handleMonNames(data.results)
        });
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentMon}`)
        .then(res => res.json())
        .then((data) => {
            handleAbilityList(data.abilities)
        });
  }, [currentMon]);

  //Handle data arrays

  function handleMonNames(monArr) {
    let species = monArr.map(e => (e.name))
    setMonRef(species)
    console.log(monRef)
  }

  function handleAbilityList(arr) {
    let abilities = arr.map(e => e.ability.name)
    setAbiRef(abilities)
    setCurrentAbility(abilities[0])
  }
  
  //Handle currentMon stats

  function handleMonChange(event) {
    setCurrentMon(event.target.value)
  }

  function handleNicknameChange(event) {
    setNickname(event.target.value)
  }

  function handleAbiChange(event) {
    setCurrentAbility(event.target.value)
  }

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

        abiRef= { abiRef }
        monRef= { monRef }

        handleMonChange= { handleMonChange }
        currentMon= { currentMon }
        setCurrentMon= { setCurrentMon }

        handleNicknameChange= { handleNicknameChange }
        nickname= { nickname }
        setNickname= { setNickname }

        handleAbiChange= { handleAbiChange }
        currentAbility= { currentAbility }
        setCurrentAbility= { setCurrentAbility }
      />
      <Box
        boxHidden= { boxHidden }
        setBoxHidden= { setBoxHidden}
      />
      <BoxFooter
        boxHidden= { boxHidden }
        setBoxHidden= { setBoxHidden }
      />
    </div>
  );
}

export default App;
