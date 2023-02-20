import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/index';

function MainUI( { leagueState, leagueSwitch }) {
    return (
        <div 
            class="Main-UI"
            style= {  leagueState ? {   background: "linear-gradient(60deg, #749bf0,#c39cd4)" } : { background: "linear-gradient(60deg, #f07474,#ffae45)" } } 
        >
            <Navbar
                leagueState= {leagueState}
                leagueSwitch= {leagueSwitch}
            />
        </div>
    );
}

export default MainUI;