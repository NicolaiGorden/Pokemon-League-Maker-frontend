import React, { useState, useEffect } from 'react';

function TrainerProfile( { position } ) {
    return (
        <div className="Trainer-Container" id="gym2">
            <div className='Trainer-Tag'>
                {position}
            </div>
            <div className="Trainer">
                <div className="Trainer-Img"></div>
                <div className="Trainer-Team">
                    <div className="Teamed-Mon"></div>
                    <div className="Teamed-Mon"></div>
                    <div className="Teamed-Mon"></div>
                    <div className="Teamed-Mon"></div>
                    <div className="Teamed-Mon"></div>
                    <div className="Teamed-Mon"></div>
                </div>
            </div>
        </div>
    );
}

export default TrainerProfile;