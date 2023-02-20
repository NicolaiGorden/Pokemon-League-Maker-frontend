import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/index';

function MainUI( { leagueState, leagueSwitch }) {
    return (
        <div 
            class= {leagueState ? 'Main-UI League-Maker' : 'Main-UI Pokemon-Maker' }
        >
            <Navbar
                leagueState= {leagueState}
                leagueSwitch= {leagueSwitch}
            />
        </div>
    );
}

export default MainUI;