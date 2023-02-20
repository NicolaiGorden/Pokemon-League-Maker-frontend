import React, { useState, useEffect } from 'react';

function NavbarWidget( { leagueState, leagueSwitch, text } ) {
    return (
        <div 
            class="Navbar-Widget"
            style= {  leagueState ? {   background: "linear-gradient(60deg, #749bf0,#c39cd4)" } : { background: "linear-gradient(60deg, #f07474,#ffae45)" } }
        >
            {text}
        </div>
    );
}

export default NavbarWidget;