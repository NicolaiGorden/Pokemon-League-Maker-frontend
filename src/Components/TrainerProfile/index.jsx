import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../../Data/img/surge.png'

function TrainerProfile( { position } ) {

    //THIS WILL BE PASSED DOWN AS A PROP.
    const trainerObj = {
        name: "Brock",
        position: "gym1",
        mon1Id: 1,
        mon2Id: 2,
        mon3Id: 3,
        mon4Id: undefined,
        mon5Id: undefined,
        mon6Id: undefined
    }

    const [mon1, setMon1] = useState(undefined)
    const [mon2, setMon2] = useState(undefined)
    const [mon3, setMon3] = useState(undefined)
    const [mon4, setMon4] = useState(undefined)
    const [mon5, setMon5] = useState(undefined)
    const [mon6, setMon6] = useState(undefined)

    const [mon1Img, setMon1Img] = useState("")
    const [mon2Img, setMon2Img] = useState("")
    const [mon3Img, setMon3Img] = useState("")
    const [mon4Img, setMon4Img] = useState("")
    const [mon5Img, setMon5Img] = useState("")
    const [mon6Img, setMon6Img] = useState("")

    let team = [mon1, mon2, mon3, mon4, mon5, mon6]

    function fetchImages(mon, slot) {
        if (mon !== undefined) {
            console.log(`hi, I'm ${mon.nickname}!`)
            fetch(`https://pokeapi.co/api/v2/pokemon/${mon.species}`)
                .then(res => res.json())
                .then((data) => {
                    switch(slot) {
                        case 1:
                            setMon1Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                        case 2:
                            setMon2Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                        case 3:
                            setMon3Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                        case 4:
                            setMon4Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                        case 5:
                            setMon5Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                        case 6:
                            setMon6Img(data.sprites.versions["generation-viii"].icons.front_default)
                            break;
                    }
                })
        } else {
            return ""
        }
    }

    useEffect(() => {
        setMon1Img(fetchImages(team[0], 1))
        setMon2Img(fetchImages(team[1], 2))
        setMon3Img(fetchImages(team[2], 3))
        setMon4Img(fetchImages(team[3], 4))
        setMon5Img(fetchImages(team[4], 5))
        setMon6Img(fetchImages(team[5], 6))
    }, [mon1, mon2, mon3, mon4, mon5, mon6])

    useEffect(() => {
        fetch('http://localhost:9292/mons')
            .then(res => res.json())
            .then((data) => {
                data.map(mon => {
                    if (mon.id === trainerObj.mon1Id) {
                        setMon1(mon)
                    } else if (mon.id === trainerObj.mon2Id){
                        setMon2(mon)
                    } else if (mon.id === trainerObj.mon3Id){
                        setMon3(mon)
                    } else if (mon.id === trainerObj.mon4Id){
                        setMon4(mon)
                    } else if (mon.id === trainerObj.mon5Id){
                        setMon5(mon)
                    } else if (mon.id === trainerObj.mon6Id){
                        setMon6(mon)
                    }
                })
            })
      }, [])

    return (
        <div className="Trainer-Container" id="gym2">
            <div className='Trainer-Tag'>
                {position}
            </div>
            <div className="Trainer">
                <div className="Trainer-Profile">
                    <img className="Trainer-Img" src={profileImg}/>
                    <a className="Trainer-Name">Lt. Surge</a>

                </div>
                <div className="Trainer-Team">
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon1Img}
                        />
                    </div>
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon2Img}
                        />
                    </div>
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon3Img}
                        />
                    </div>
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon4Img}
                        />
                    </div>
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon5Img}
                        />
                    </div>
                    <div className="Teamed-Mon">
                        <motion.div
                            className="Team-BG"
                            whileHover={{ scale: 1.1 }}
                            whileTap= {{ scale: 0.9 }}
                        >

                        </motion.div>
                        <img
                            class="Mon-Pic"
                            src={mon6Img}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerProfile;