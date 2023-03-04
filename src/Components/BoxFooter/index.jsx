import React, { useState, useEffect } from 'react';

function BoxFooter( { boxHidden, setBoxHidden, leagueModeOn} ) {
    return (
        <footer onClick={e => setBoxHidden(!boxHidden)} class={leagueModeOn? "Box-Footer Uninteract": "Box-Footer"}>BOX</footer>
    );
}

export default BoxFooter;