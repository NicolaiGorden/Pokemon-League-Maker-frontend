import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CurrentMove({id, checkEditing, editingMove, handleMoveClick, move, colorPicker}) {
    
    const [typeColor, setTypeColor] = useState("#d4d4d4")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${move}`)
            .then(res => res.json())
            .then((data) => {
                setTypeColor(colorPicker(data.type.name))
            });
    }, [move]);

    return ( 
    <motion.div 
        class={checkEditing(editingMove, id)}
        id= {id}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick= {handleMoveClick}
        style= {{background: typeColor, outline: typeColor}}
    >
        {move}
    </motion.div>
    );
}

export default CurrentMove;