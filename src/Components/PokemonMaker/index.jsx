import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PokemonMaker( { monRef, handleMonChange, currentMon, setCurrentMon, handleNicknameChange, nickname, setNickname, currentAbility, setCurrentAbility, abiRef, handleAbiChange }) {

    return (
        <div class="PM-Content">
            <div class="PM-img-Container">
                <img class="PM-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png" alt="monname"/>
            </div>

            <form class="Pokeform">
                <label class="Label">Nickname:</label>
                <input class="Nickname-Input" type="text" maxlength="12" onChange= {handleNicknameChange} defaultValue= {currentMon}></input>
                <label class="Label" style={{marginRight: "95px"}} >Species:</label>
                <select class="Species-Select" type="text" maxlength="12" onChange= {handleMonChange}>
                    {monRef.map(e => <option key={e}>{e}</option>)}
                </select>
            </form>

            <form class="Abiform">
                <label class="Ability-Label">Ability:</label>
                <select class="Ability-Select" onChange= {handleAbiChange} type="text" maxlength="12">
                    {abiRef.map(e => <option key={e}>{e}</option>)}
                </select>
            </form>

            <div class="Moves">
                <div class="Move">One</div>
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