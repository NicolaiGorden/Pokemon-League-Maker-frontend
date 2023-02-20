import React, { useState, useEffect } from 'react';

function BoxFooter( { boxHidden, setBoxHidden } ) {
    return (
        <footer onClick={e => setBoxHidden(!boxHidden)} class="Box-Footer">BOX</footer>
    );
}

export default BoxFooter;