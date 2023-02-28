import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurrentMove from '../CurrentMove';

function PokemonMaker( { 
    monRef, 
    handleMonChange, 
    currentMon, 
    setCurrentMon, 
    handleNicknameChange, 
    nickname, 
    setNickname, 
    currentAbility, 
    setCurrentAbility, 
    abiRef, 
    handleAbiChange, 
    handleMoveClick, 
    editingMove, 
    setEditingMove,
    setMove1,
    setMove2,
    setMove3,
    setMove4,
    move1,
    move2,
    move3,
    move4,
    colorPicker,
    handleFormSubmit
}) {

    const [monImg, setMonImg] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${currentMon.toLowerCase()}`)
            .then(res => res.json())
            .then((data) => {
                setMonImg(data.sprites.front_default)
                setMove1(data.moves[1].move.name)
                setMove2(data.moves[2].move.name)
                setMove3(data.moves[3].move.name)
                setMove4(data.moves[4].move.name)
            });
    }, [currentMon]);

    function checkEditing(editing, moveID) {
        if (editing == "none") {
            return "Move"
        } else if (editing == moveID) {
            return "Move Selected"
    
        } else {
            return "Move Deselected"
        }
    }

    return (
        <div class="PM-Content">
            <div class="PM-img-Container">
                <img class="PM-img" src={monImg} alt="monname"/>
            </div>

            <form class="Pokeform">
                <label class="Label">Nickname:</label>
                <input class={editingMove == "none" ? "Nickname-Input" : "Nickname-Input Deselected-No-Scale"} type="text" maxlength="12" onChange= {handleNicknameChange} defaultValue= {currentMon}></input>
                <label class="Label" style={{marginRight: "95px"}} defaultValue= {currentMon} >Species:</label>
                <select class={editingMove == "none" ? "Species-Select" : "Species-Select Deselected-No-Scale"} type="text" maxlength="12" onChange= {handleMonChange}>
                    {monRef.map((e, i) => <option selected= {e.toLowerCase() == currentMon.toLowerCase() ? "selected" : ""}key={e}>{e}</option>)}
                </select>
            </form>

            <form class="Abiform">
                <label class="Ability-Label">Ability:</label>
                <select class={editingMove == "none" ? "Ability-Select" : "Ability-Select Deselected-No-Scale"} onChange= {handleAbiChange} type="text" maxlength="12">
                    {abiRef.map((e, i) => <option key={i}>{e}</option>)}
                </select>
            </form>

            <div class="Moves">
                <CurrentMove move={ move1 } id={ "m1" } checkEditing={ checkEditing } editingMove= { editingMove } handleMoveClick= {handleMoveClick} colorPicker= { colorPicker }/>
                <CurrentMove move={ move2 } id={ "m2" } checkEditing={ checkEditing } editingMove= { editingMove } handleMoveClick= {handleMoveClick} colorPicker= { colorPicker }/>
                <CurrentMove move={ move3 } id={ "m3" } checkEditing={ checkEditing } editingMove= { editingMove } handleMoveClick= {handleMoveClick} colorPicker= { colorPicker }/>
                <CurrentMove move={ move4 } id={ "m4" } checkEditing={ checkEditing } editingMove= { editingMove } handleMoveClick= {handleMoveClick} colorPicker= { colorPicker }/>
            </div>

            <div class="Save">
                <motion.button 
                    class={editingMove == "none" ? "Save-Button" : "Save-Button Deselected-No-Scale"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={e => handleFormSubmit(nickname, currentMon, currentAbility, move1, move2, move3, move4)}
                >
                    Save to Box
                </motion.button>
            </div>

        </div>
    );
}

export default PokemonMaker;

// <motion.button 
// class="save-button"
// whileHover={{ scale: 1.1 }}
// whileTap={{ scale: 0.95 }}
// >SAVE</motion.button>