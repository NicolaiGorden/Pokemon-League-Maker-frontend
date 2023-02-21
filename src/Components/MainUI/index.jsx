import React, { useState, useEffect } from 'react';
import LeagueMaker from '../LeagueMaker';
import Navbar from '../Navbar/index';
import PokemonMaker from '../PokemonMaker';

function MainUI( { leagueState, leagueSwitch, monRef, handleMonChange, currentMon, setCurrentMon, handleNicknameChange, nickname, setNickname, currentAbility, setCurrentAbility, abiRef, handleAbiChange }) {
    return (
        <div 
            class= {leagueState ? 'Main-UI League-Maker' : 'Main-UI Pokemon-Maker' }
        >
            <Navbar
                leagueState= {leagueState}
                leagueSwitch= {leagueSwitch}
            />
            {leagueState 
                ? 
                <LeagueMaker/> 
                : 
                <PokemonMaker 
                    monRef= { monRef } 
                    handleMonChange= { handleMonChange } 
                    currentMon= { currentMon } 
                    setCurrentMon= { setCurrentMon }
                    handleNicknameChange= {handleNicknameChange}
                    nickname= { nickname }
                    setNickname= { setNickname }                   
                    currentAbility= { currentAbility }
                    setCurrentAbility= { setCurrentAbility }
                    abiRef= { abiRef }
                    handleAbiChange= { handleAbiChange }
                />}
        </div>
    );
}

export default MainUI;