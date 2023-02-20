import React, { useState, useEffect } from 'react';

function Box( { boxHidden, setBoxHidden } ) {
    return (
        <div class={boxHidden ? 'Box Move-Down' : 'Box'}></div>
    );
}

export default Box;