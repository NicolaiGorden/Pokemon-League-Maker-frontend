import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//dnd imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { DndContext, closestCenter } from "@dnd-kit/core"
import { arrayMove, sortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

function PokemonMaker( { monRef, handleMonChange, currentMon, setCurrentMon, handleNicknameChange, nickname, setNickname, currentAbility, setCurrentAbility, abiRef, handleAbiChange }) {

    const [monImg, setMonImg] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${currentMon.toLowerCase()}`)
            .then(res => res.json())
            .then((data) => {
                setMonImg(data.sprites.front_default)
            });
    }, [currentMon]);

    return (
        <div class="PM-Content">
            <div class="PM-img-Container">
                <img class="PM-img" src={monImg} alt="monname"/>
            </div>

            <form class="Pokeform">
                <label class="Label">Nickname:</label>
                <input class="Nickname-Input" type="text" maxlength="12" onChange= {handleNicknameChange} defaultValue= {currentMon}></input>
                <label class="Label" style={{marginRight: "95px"}} defaultValue= {currentMon} >Species:</label>
                <select class="Species-Select" type="text" maxlength="12" onChange= {handleMonChange}>
                    {monRef.map((e, i) => <option selected= {e.toLowerCase() == currentMon.toLowerCase() ? "selected" : ""}key={e}>{e}</option>)}
                </select>
            </form>

            <form class="Abiform">
                <label class="Ability-Label">Ability:</label>
                <select class="Ability-Select" onChange= {handleAbiChange} type="text" maxlength="12">
                    {abiRef.map((e, i) => <option key={i}>{e}</option>)}
                </select>
            </form>

            <div class="Moves">
                <motion.div class="Move" onHoverStart={e => console.log("hover")}>One</motion.div>
                <div class="Move">Two</div>
                <div class="Move">Three</div>
                <div class="Move">Four</div>
            </div>

            <div class="Save">
                <motion.button 
                    class="Save-Button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
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