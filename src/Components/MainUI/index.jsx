import React, { useState, useEffect } from 'react';
import LeagueMaker from '../LeagueMaker';
import Navbar from '../Navbar/index';
import PokemonMaker from '../PokemonMaker';

function MainUI( { leagueState, leagueSwitch }) {
    return (
        <div 
            class= {leagueState ? 'Main-UI League-Maker' : 'Main-UI Pokemon-Maker' }
        >
            <Navbar
                leagueState= {leagueState}
                leagueSwitch= {leagueSwitch}
            />
            {leagueState ? <LeagueMaker/> : <PokemonMaker/>}
        </div>
    );
}

export default MainUI;