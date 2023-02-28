import logo from './logo.svg';
import './App.css';
import MainUI from './Components/MainUI';
import React, { useState, useEffect } from 'react';
import NavbarWidget from './Components/NavbarWidget';
import Box from './Components/Box';
import BoxFooter from './Components/BoxFooter';
import MoveFinder from './Components/MoveFinder';

function App() {
  //switches 
  const [leagueModeOn, setLeagueModeOn] = useState(false)
  const [boxHidden, setBoxHidden] = useState(false)
  const [editingMove, setEditingMove] = useState("none")

  //reference data arrays
  const [monRef, setMonRef] = useState([])
  const [abiRef, setAbiRef] = useState([])
  const [movRef, setMovRef] = useState([])

  //currentMon stats
  const [currentMon, setCurrentMon] = useState('bulbasaur')
  const [nickname, setNickname] = useState('bulbasaur')
  const [currentAbility, setCurrentAbility] = useState('overgrow')
  const [move1, setMove1] = useState("swords-dance")
  const [move2, setMove2] = useState("cut")
  const [move3, setMove3] = useState("bind")
  const [move4, setMove4] = useState("vine-whip")
  const [monId, setMonId] = useState(undefined)

  useEffect(()=> {
    setCurrentMon('bulbasaur')
    setNickname('bulbasaur')
    setCurrentAbility("overgrow")
    setMonId(undefined)
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentMon.toLowerCase()}`)
    .then(res => res.json())
    .then((data) => {
        handleAbilityList(data.abilities)
        handleMoveList(data.moves)
        setMove1(data.moves[1].move.name)
        setMove2(data.moves[2].move.name)
        setMove3(data.moves[3].move.name)
        setMove4(data.moves[4].move.name)
    });
  }, [leagueModeOn])

  function handleFormSubmit(nickname, currentMon, currentAbility, move1, move2, move3, move4) {
    //IF THERE IS NO MON ID, NORMAL SUBMIT
    fetch("http://localhost:9292/mons", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nickname: nickname,
            species: currentMon,
            ability: currentAbility,
            move1: move1,
            move2: move2,
            move3: move3,
            move4: move4,
        })
    })
    .then()
    .then()
  //IF THERE IS A MON ID, PATCH
}

  //fetch
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1008')
        .then(res => res.json())
        .then((data) => {
            handleMonNames(data.results)
            setMove1(data.moves[1].move.name)
            setMove2(data.moves[2].move.name)
            setMove3(data.moves[3].move.name)
            setMove4(data.moves[4].move.name)
        });
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentMon.toLowerCase()}`)
        .then(res => res.json())
        .then((data) => {
            handleAbilityList(data.abilities)
            handleMoveList(data.moves)
            setMove1(data.moves[1].move.name)
            setMove2(data.moves[2].move.name)
            setMove3(data.moves[3].move.name)
            setMove4(data.moves[4].move.name)
        });
  }, [currentMon]);

  //Handle data arrays
  function handleMonNames(monArr) {
    let species = monArr.map(e => (e.name.charAt(0).toUpperCase() + e.name.slice(1)))
    setMonRef(species)
    console.log(monRef)
  }

  function handleAbilityList(arr) {
    let abilities = arr.map(e => e.ability.name)
    setAbiRef(abilities)
    setCurrentAbility(abilities[0])
  }

  function handleMoveList(arr) {
    let moves = arr.map(e => e.move.name)
    setMovRef(moves)
  }
  
  //Handle currentMon stats
  function handleMonChange(event) {
    setCurrentMon(event.target.value.toLowerCase())
  }

  function handleNicknameChange(event) {
    setNickname(event.target.value)
  }

  function handleAbiChange(event) {
    setCurrentAbility(event.target.value)
  }

  //Misc
  function colorPicker(type) {
    switch (type) {
      case 'normal':
        return '#A8A878'
      case 'fighting':
        return '#C03028'
      case 'flying':
        return '#A890F0'
      case 'poison':
        return '#9D3A9D'
      case 'ground':
        return '#E0C068'
      case 'rock':
        return '#B8A038'
      case 'bug':
        return '#A8B820'
      case 'ghost':
        return '#705898'
      case 'steel':
        return '#B8B8D0'
      case 'fire':
        return '#F08030'
      case 'water':
        return '#6890F0'
      case 'grass':
        return '#78C850'
      case 'electric':
        return '#F8D030' 
      case 'psychic':
        return '#F85888'
      case 'ice':
        return '#98D8D8'
      case 'dragon':
        return '#7038F8'
      case 'dark':
        return '#705848' 
      case 'fairy':
        return '#DEA5DE' 
    }
  }

  function handleMoveClick(event) {
    setEditingMove(event.target.id)
    console.log(editingMove)
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

        editingMove= { editingMove }
        setEditingMove= { setEditingMove }

        abiRef= { abiRef }
        monRef= { monRef }
        handleMoveClick= { handleMoveClick }

        handleMonChange= { handleMonChange }
        currentMon= { currentMon }
        setCurrentMon= { setCurrentMon }

        handleNicknameChange= { handleNicknameChange }
        nickname= { nickname }
        setNickname= { setNickname }

        handleAbiChange= { handleAbiChange }
        currentAbility= { currentAbility }
        setCurrentAbility= { setCurrentAbility }

        setMove1={ setMove1 }
        setMove2={ setMove2 }
        setMove3={ setMove3 }
        setMove4={ setMove4 }
        move1={ move1 }
        move2={ move2 }
        move3={ move3 }
        move4={ move4 }

        colorPicker= { colorPicker }
        handleFormSubmit= { handleFormSubmit }
      />
      <Box
        boxHidden= { boxHidden }
        setBoxHidden= { setBoxHidden}
      />
      <BoxFooter
        boxHidden= { boxHidden }
        setBoxHidden= { setBoxHidden }
      />
      <MoveFinder 
        leagueModeOn= { leagueModeOn } 
        movRef= { movRef } 
        colorPicker= { colorPicker } 
        editingMove= { editingMove }
        setEditingMove= { setEditingMove }
        setMove1= { setMove1 }
        setMove2= { setMove2 }
        setMove3= { setMove3 }
        setMove4= { setMove4 }
      />
    </div>
  );
}

export default App;
