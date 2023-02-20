import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar( { leagueState, leagueSwitch } ) {

    const [ball, setBall] = useState("")
    const [vs, setVs] = useState("")

    const [ballHover, setBallHover] = useState(false)
    const [vsHover, setVsHover] = useState(false)

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
                <motion.div 
                    class="Nav-Anim" 
                    style= {{  background: "linear-gradient(20deg, #bbbbbb,#797979)"}}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {setBallHover(true)}}
                    onHoverEnd={e => {setBallHover(false)}}
                    whileTap= {{ scale: 0.9 }}
                    onClick= { e => leagueSwitch(false) }
                >
                </motion.div>
                <img 
                    class="Nav-Content" 
                    style= {  ballHover ? {filter: 'grayscale(0%)', scale: 2 } : {filter: 'grayscale(100%)'} } 
                    src={ball}
                />
            </a>
            <a class="Navbar-Item">
            <motion.div 
                    class="Nav-Anim" 
                    style= {{  background: "linear-gradient(20deg, #bbbbbb,#797979)"}}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {setVsHover(true)}}
                    onHoverEnd={e => {setVsHover(false)}}
                    whileTap= {{ scale: 0.9 }}
                    onClick= { e => leagueSwitch(true) }
                >
                </motion.div>
                <img
                    class="Nav-Content" 
                    style= {  vsHover ? {filter: 'grayscale(0%)', scale: 2 } : {filter: 'grayscale(100%)'} } 
                    src={vs}
                />
            </a>
        </nav>
    );
}

export default Navbar