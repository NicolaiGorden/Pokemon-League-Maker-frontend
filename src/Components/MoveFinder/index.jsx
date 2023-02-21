import React, { useState, useEffect } from 'react';
import ListedMove from '../ListedMove';

function MoveFinder( { leagueModeOn, movRef }) {

    const [query, setQuery] = useState("")
    const filteredMoves = movRef.filter(move => move.toLowerCase().includes(query.toLowerCase()))

    function handleSearch(event) {
        setQuery(event.target.value)
        console.log(query)
    }

    return (
        <div class= {leagueModeOn ? "Move-Finder Gone": "Move-Finder" }>
            <input class="Move-Search" type="text" onChange= {handleSearch}></input>
            <div class= "Move-Container">
                {filteredMoves.map(e => <ListedMove move= {e} filteredMoves= {filteredMoves}/>)}
            </div>
        </div>
    );
}

export default MoveFinder;