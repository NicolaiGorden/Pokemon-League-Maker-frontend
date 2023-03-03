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
  const [speciesChange, setSpeciesChange] = useState(false)

  //reference data arrays
  const [monRef, setMonRef] = useState([])
  const [abiRef, setAbiRef] = useState([])
  const [movRef, setMovRef] = useState([])
  const [boxedMons, setBoxedMons] = useState([])

  //currentMon stats
  const [currentMon, setCurrentMon] = useState('bulbasaur')
  const [nickname, setNickname] = useState('bulbasaur')
  const [currentAbility, setCurrentAbility] = useState('overgrow')
  const [move1, setMove1] = useState("swords-dance")
  const [move2, setMove2] = useState("cut")
  const [move3, setMove3] = useState("bind")
  const [move4, setMove4] = useState("vine-whip")
  const [monId, setMonId] = useState(undefined)

  useEffect(() => {
    fetch('http://localhost:9292/mons')
        .then(res => res.json())
        .then((data) => {
          setBoxedMons(data)
        })
  }, [])

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
        setMove1(data[1].moves[1].move.name)
        setMove2(data[1].moves[2].move.name)
        setMove3(data[1].moves[3].move.name)
        setMove4(data[1].moves[4].move.name)
    });
  }, [leagueModeOn])

  function handleFormSubmit(nickname, currentMon, currentAbility, move1, move2, move3, move4) {
    if (monId === undefined) {
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
      .then(r => r.json())
      .then(data => {
        setMonId(undefined)
        setBoxedMons([...boxedMons, data])
      })
    } else {
      fetch(`http://localhost:9292/mons/${monId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              nickname: nickname,
              species: currentMon,
              ability: currentAbility,
              move1: move1,
              move2: move2,
              move3: move3,
              move4: move4,
          }),
        })
        .then(data => {
          const newObj = {
            nickname: nickname,
            species: currentMon,
            ability: currentAbility,
            move1: move1,
            move2: move2,
            move3: move3,
            move4: move4,
          }
            setBoxedMons(boxedMons.map(mon => (mon.id === monId ? Object.assign(mon, newObj) : mon)))
        })
    }
  }

  function handleDeleteClick(pokeId) {
    fetch(`http://localhost:9292/mons/${pokeId}`, {
      method: "DELETE",
    })
    .then(setBoxedMons(boxedMons.filter(e => e.id !== pokeId)))
  }

  function handleEditClick(pokeId) {
    fetch(`http://localhost:9292/mons/${pokeId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setNickname(data.nickname)
        setCurrentAbility(data.ability)
        setCurrentMon(data.species)
        setMove1(data.move1)
        setMove2(data.move2)
        setMove3(data.move3)
        setMove4(data.move4)
        setMonId(data.id)
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.species.toLowerCase()}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            handleAbilityList(data.abilities)
            handleMoveList(data.moves)
          })
      })

  }

  //fetch
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1008')
        .then(res => res.json())
        .then((data) => {
            handleMonNames(data.results)
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
  }, [speciesChange]);

  //Handle data arrays
  function handleMonNames(monArr) {
    let species = monArr.map(e => (e.name.charAt(0).toUpperCase() + e.name.slice(1)))
    setMonRef(species)
    console.log(monRef)
  }

  function handleAbilityList(arr) {
    let abilities = arr.map(e => e.ability.name)
    setAbiRef(abilities)
  }

  function handleMoveList(arr) {
    let moves = arr.map(e => e.move.name)
    setMovRef(moves)
  }
  
  //Handle currentMon stats
  function handleMonChange(event) {
    setCurrentMon(event.target.value.toLowerCase())
    setSpeciesChange(!speciesChange)
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

        monId={ monId }

        colorPicker= { colorPicker }
        handleFormSubmit= { handleFormSubmit }
      />
      <Box
        boxHidden= { boxHidden }
        setBoxHidden= { setBoxHidden}
        boxedMons= { boxedMons }
        editingMove= { editingMove }
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
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
