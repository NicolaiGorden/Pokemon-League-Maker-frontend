import React, { useState, useEffect } from 'react';

function ListedMove( { move, filteredMoves } ) {
    return (
        <div class={filteredMoves.length > 7 ? "Listed-Move Push": "Listed-Move"}>{ move }</div>
    );
}

export default ListedMove;