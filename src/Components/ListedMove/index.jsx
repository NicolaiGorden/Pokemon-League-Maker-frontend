import React, { useState, useEffect } from 'react';


function ListedMove( { move, filteredMoves, colorPicker } ) {
    
    const [typeColor, setTypeColor] = useState("#d4d4d4")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${move}`)
            .then(res => res.json())
            .then((data) => {
                setTypeColor(colorPicker(data.type.name))
            });
    }, []);

    return (
        <div 
            class={filteredMoves.length > 7 ? "Listed-Move Push": "Listed-Move"}
            style= {{background: typeColor}}
        >
            { move }
        </div>
    );
}

export default ListedMove;