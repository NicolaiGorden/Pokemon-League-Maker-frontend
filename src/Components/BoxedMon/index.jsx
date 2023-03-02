import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function BoxedMon( {nickname, species, id, handleDeleteClick, handleEditClick} ) {
    
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${species}/`)
            .then(res => res.json())
            .then((data) => {
                setImg(data.sprites.versions["generation-viii"].icons.front_default)
            })
    }, [])

    return (
        <div class="Boxed-Mon">
            <div className="Box-Mon-Img-Container">
                <img className="Box-Mon-Img" src={img}/>
            </div>
            <div className="Name-And-Nickname">
                <div className='Nickname'>
                    {nickname}
                </div>
                <div className='Species'>
                    ({species})
                </div>
            </div>
            <div class="Box-Button-Container">
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
            </div>
        </div>
    );
}

export default BoxedMon;