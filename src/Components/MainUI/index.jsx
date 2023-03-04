import React, { useState, useEffect } from 'react';
import LeagueMaker from '../LeagueMaker';
import Navbar from '../Navbar/index';
import PokemonMaker from '../PokemonMaker';

function MainUI( { 
    leagueState, 
    leagueSwitch, 
    monRef, 
    handleMonChange, 
    currentMon, 
    setCurrentMon, 
    handleNicknameChange, 
    nickname, 
    setNickname, 
    currentAbility, 
    setCurrentAbility, 
    abiRef, 
    handleAbiChange, 
    handleMoveClick, 
    editingMove, 
    setEditingMove,
    setMove1,
    setMove2,
    setMove3,
    setMove4,
    move1,
    move2,
    move3,
    move4,
    colorPicker,
    handleFormSubmit,
    setBoxedMons,
    monId,
    setBoxHidden,
    editingTeam,
    setEditingTeam,
    setTrainerFocus,
    setSlotFocus,
    monClick,
    setMonClick,
    trainerFocus
}) {
    return (
        <div 
            class= { leagueState ? 'Main-UI League-Maker' : 'Main-UI Pokemon-Maker' }
        >
            <Navbar
                leagueState= { leagueState }
                leagueSwitch= { leagueSwitch }
                setBoxHidden= { setBoxHidden}
            />
            { leagueState 
                ? 
                <LeagueMaker
                    setBoxHidden= { setBoxHidden}
                    editingTeam= { editingTeam }
                    trainerFocus= { trainerFocus }
                    setTrainerFocus= {setTrainerFocus}
                    setSlotFocus= {setSlotFocus}
                    monClick= {monClick}
                    setMonClick= {setMonClick}
                /> 
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
                    handleMoveClick= { handleMoveClick }
                    editingMove= { editingMove }
                    setEditingMove= { setEditingMove }
                    setMove1={ setMove1 }
                    setMove2={ setMove2 }
                    setMove3={ setMove3 }
                    setMove4={ setMove4 }
                    move1={ move1 }
                    move2={ move2 }
                    move3={ move3 }
                    move4={ move4 }
                    colorPicker= { colorPicker }
                    handleFormSubmit= { handleFormSubmit }
                    setBoxedMons={ setBoxedMons }
                    monId= {monId}
                /> }
        </div>
    );
}

export default MainUI;