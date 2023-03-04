import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function BoxedMon( {nickname, species, id, handleDeleteClick, handleEditClick, leagueModeOn, trainerFocus, slotFocus, monClick, setMonClick} ) {
    
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
            whileTap={leagueModeOn ? { scale: 0.98 } : ""}
            onClick={e => {
                setMonClick(!monClick)
                if (leagueModeOn) {
                    switch (slotFocus) {
                        case "1":
                            fetch(`http://localhost:9292/trainers/patchmon1/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon1_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                        case "2":
                            fetch(`http://localhost:9292/trainers/patchmon2/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon2_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                        case "3":
                            fetch(`http://localhost:9292/trainers/patchmon3/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon3_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                        case "4":
                            fetch(`http://localhost:9292/trainers/patchmon4/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon4_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                        case "5":
                            fetch(`http://localhost:9292/trainers/patchmon5/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon5_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                        case "6":
                            fetch(`http://localhost:9292/trainers/patchmon6/${trainerFocus}`, {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    mon6_id: id,
                                }),
                            })
                            .then(res => res.json())
                            .then(data => console.log(data))
                            break;
                    }
                }
            }}
        >
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