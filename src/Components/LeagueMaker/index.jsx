import React, { useState, useEffect } from 'react';
import TrainerProfile from '../TrainerProfile';

function LeagueMaker() {

    const [gym1, setGym1] = useState()
    const [gym2, setGym2] = useState()
    const [gym3, setGym3] = useState()
    const [gym4, setGym4] = useState()
    const [gym5, setGym5] = useState()
    const [gym6, setGym6] = useState()
    const [gym7, setGym7] = useState()
    const [gym8, setGym8] = useState()

    const [e41, setE41] = useState()
    const [e42, setE42] = useState()
    const [e43, setE43] = useState()
    const [e44, setE44] = useState()

    const [champion, setChampion] = useState()

    return (
        <div class="LM-Content">
            <TrainerProfile position="GYM 1" trainer="TRAINER OBJECT GOES HERE"/>
            <TrainerProfile position="GYM 2"/>
            <TrainerProfile position="GYM 3"/>
            <TrainerProfile position="GYM 4"/>
            <TrainerProfile position="GYM 5"/>
            <TrainerProfile position="GYM 6"/>
            <TrainerProfile position="GYM 7"/>
            <TrainerProfile position="GYM 8"/>

            <TrainerProfile position="E4: 1"/>
            <TrainerProfile position="E4: 2"/>
            <TrainerProfile position="E4: 3"/>
            <TrainerProfile position="E4: 4"/>

            <TrainerProfile position="CHAMPION"/>
        </div>
    );
}

export default LeagueMaker;