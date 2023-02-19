import React, { useState, useEffect } from 'react';

function Navbar() {

    //directional hover effects for both items, should be placed on navbar anim, and also remove grayscale on hover

    const [ball, setBall] = useState("")
    const [vs, setVs] = useState("")

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/item/poke-ball')
            .then(res => res.json())
            .then((data) => {
                setBall(data.sprites.default)
                console.log(ball)
            });
        fetch('https://pokeapi.co/api/v2/item/vs-seeker')
            .then(res => res.json())
            .then((data) => {
                setVs(data.sprites.default)
                console.log(ball)
            });
    }, []);


    return (
        <nav class="Navbar">
            <a class="Navbar-Item">
                <img class="Nav-Content" style= {{  filter: 'grayscale(100%)' }} src={ball}/>
                <div class="Nav-Anim" style= {{  background: "linear-gradient(20deg, #bbbbbb,#797979)"}}></div>
            </a>
            <a class="Navbar-Item">
                <img class="Nav-Content" style= {{  filter: 'grayscale(100%)' }} src={vs}/>
                <div class="Nav-Anim" style= {{  background: "linear-gradient(20deg, #bbbbbb,#797979)"}}></div>
            </a>
        </nav>
    );
}

export default Navbar