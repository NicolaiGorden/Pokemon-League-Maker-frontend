import React, { useState, useEffect } from 'react';
import ListedMove from '../ListedMove';
import uuid from 'react-uuid';


function MoveFinder( { leagueModeOn, movRef, colorPicker, moveToChange, editingMove, setEditingMove, setMove1, setMove2, setMove3, setMove4 }) {

    const [query, setQuery] = useState("")
    const filteredMoves = movRef.filter(move => move.toLowerCase().includes(query.toLowerCase())).sort()

    function handleSearch(event) {
        setQuery(event.target.value)
        console.log(query)
    }

    return (
        <div class= {leagueModeOn || editingMove == "none" ? "Move-Finder Gone": "Move-Finder" }>
            <input class="Move-Search" type="text" onChange= {handleSearch} placeholder="Search moves..."></input>
            <div class= "Move-Container">
                {filteredMoves.map((e, i) => <ListedMove 
                    key= {uuid()} 
                    move= {e} 
                    filteredMoves= {filteredMoves} 
                    colorPicker= { colorPicker }
                    editingMove= { editingMove }
                    setEditingMove= { setEditingMove }
                    setMove1= { setMove1 }
                    setMove2= { setMove2 }
                    setMove3= { setMove3 }
                    setMove4= { setMove4 }
                    />)}
            </div>
        </div>
    );
}

export default MoveFinder;