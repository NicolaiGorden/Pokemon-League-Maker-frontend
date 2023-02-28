import React, { useState, useEffect } from 'react';

function Box( { boxHidden, setBoxHidden } ) {
    return (
        <div class={boxHidden ? 'Box Move-Down' : 'Box'}>
            <input class="Mon-Search" type="text" onChange= {e => console.log("none")} placeholder="Search by nickname..."></input>
            <div class="Boxed-Mon-Container">
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
                <div class="Boxed-Mon"></div>
            </div>
        </div>
    );
}

export default Box;