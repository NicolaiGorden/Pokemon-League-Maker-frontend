import React, { useState, useEffect } from 'react';
import TrainerProfile from '../TrainerProfile';

function LeagueMaker() {
    return (
        <div class="LM-Content">
            <TrainerProfile position="GYM 1"/>
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