import React, { useState, useEffect } from 'react';

function PokemonMaker() {
    return (
        <div class="PM-Content">
            <div class="PM-img-Container">
                <img class="PM-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png" alt="monname"/>
            </div>
            <form class="Pokeform">
                <label class="Label">Nickname:</label>
                <input class="Nickname-Input" type="text" maxlength="12"></input>
                <label class="Label" style={{marginRight: "95px"}} >Species:</label>
                <select class="Species-Select" type="text" maxlength="12">
                    <option value="abi1">abi1</option>
                    <option value="abi2">abi2</option>
                </select>
            </form>
            <form class="Abiform">
                <label class="Ability-Label">Ability:</label>
                <select class="Ability-Select" type="text" maxlength="12">
                    <option value="abi1">abi1</option>
                    <option value="abi2">abi2</option>
                </select>
            </form>
            <div class="Moves">moves</div>
            <div class="Save">save</div>
        </div>
    );
}

export default PokemonMaker;