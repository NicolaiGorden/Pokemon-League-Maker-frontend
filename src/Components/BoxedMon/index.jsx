import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function BoxedMon( {nickname, species, id, handleDeleteClick, handleEditClick, leagueModeOn} ) {
    
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${species}/`)
            .then(res => res.json())
            .then((data) => {
                setImg(data.sprites.versions["generation-viii"].icons.front_default)
            })
    }, [species])

    return (
        <motion.div 
            class="Boxed-Mon"
            whileHover={leagueModeOn ? { scale: 1.04 } : ""}
            whileTap={leagueModeOn ? { scale: 0.98 } : ""}>
            <div className="Box-Mon-Img-Container">
                <img className="Box-Mon-Img" src={img}/>
            </div>
            <div className={leagueModeOn ? "Name-And-Nickname-Big" : "Name-And-Nickname"}>
                <div className={leagueModeOn ? "Nickname-Big" : "Nickname"}>
                    {nickname}
                </div>
                <div className={leagueModeOn ? "Species-Big" : "Species"}>
                    ({species})
                </div>
            </div>
            {leagueModeOn ? "" : <div class="Box-Button-Container">
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='Edit-Button'
                    onClick= {e => handleEditClick(id)}>
                    EDIT
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='Edit-Button'
                    onClick= {e => handleDeleteClick(id)}
                    >
                    DELETE
                </motion.button>
            </div>}
        </motion.div>
    );
}

export default BoxedMon;