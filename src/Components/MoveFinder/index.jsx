import React, { useState, useEffect } from 'react';
import ListedMove from '../ListedMove';
import uuid from 'react-uuid';


function MoveFinder( { leagueModeOn, movRef, colorPicker }) {

    const [query, setQuery] = useState("")
    const filteredMoves = movRef.filter(move => move.toLowerCase().includes(query.toLowerCase()))

    function handleSearch(event) {
        setQuery(event.target.value)
        console.log(query)
    }

    return (
        <div class= {leagueModeOn ? "Move-Finder Gone": "Move-Finder" }>
            <input class="Move-Search" type="text" onChange= {handleSearch} placeholder="Search moves..."></input>
            <div class= "Move-Container">
                {filteredMoves.map((e, i) => <ListedMove key= {uuid()} move= {e} filteredMoves= {filteredMoves} colorPicker= { colorPicker }/>)}
            </div>
        </div>
    );
}

export default MoveFinder;