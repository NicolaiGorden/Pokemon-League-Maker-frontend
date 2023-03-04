import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BoxedMon from '../BoxedMon';

function Box( { boxHidden, setBoxHidden, boxedMons, editingMove, handleDeleteClick, handleEditClick, leagueModeOn, trainerFocus, slotFocus, monClick, setMonClick } ) {

    const [query, setQuery] = useState("")
    let boxedMonRef = boxedMons.filter(mon => mon.nickname.toLowerCase().includes(query.toLowerCase())).sort()

    function handleSearch(event) {
        setQuery(event.target.value)
        console.log(query)
    }

    return (
        <div class={boxHidden ? 'Box Move-Down' : 'Box'}>
            <input class={editingMove == "none" ? "Mon-Search" : "Mon-Search Deselected-No-Scale"} type="text" onChange= {handleSearch} placeholder="Search by nickname..."></input>
            <div class={editingMove == "none" ? "Boxed-Mon-Container" : "Boxed-Mon-Container Deselected-No-Scale"}>
                {/* MAKE SURE BOXED MON COMPONENT ONLY RENDER EDIT BUTTON WHEN POKEMON MAKER IS OPEN.
                WHEN LEAGUE MAKER IS OPEN, BOXED MON DIVS BECOME BUTTONS WITH FRAMER MOTION EFFECTS. */}
                {boxedMonRef.map(mon => <BoxedMon 
                    key={mon.id} 
                    id={mon.id} 
                    nickname={mon.nickname} 
                    species={mon.species}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                    leagueModeOn={leagueModeOn}
                    trainerFocus={trainerFocus}
                    slotFocus={slotFocus}
                    monClick={monClick}
                    setMonClick={setMonClick}
                    />)}
            </div>
        </div>
    );
}

export default Box;