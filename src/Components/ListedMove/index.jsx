import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function ListedMove( { move, filteredMoves, colorPicker, editingMove, setEditingMove, setMove1, setMove2, setMove3, setMove4 } ) {
    
    const [typeColor, setTypeColor] = useState("#d4d4d4")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${move}`)
            .then(res => res.json())
            .then((data) => {
                setTypeColor(colorPicker(data.type.name))
            });
    }, []);

    function handleMoveSelect(e) {
        setEditingMove("none")
        if (editingMove === "m1") {
            setMove1(move)
        } else if (editingMove === "m2") {
            setMove2(move)
        } else if (editingMove === "m3") {
            setMove3(move)
        } else if (editingMove === "m4") {
            setMove4(move)
        }
    }
    return (
        <motion.div 
            class={filteredMoves.length > 7 ? "Listed-Move Push": "Listed-Move"}
            style= {{background: typeColor}}
            whileHover={{ marginRight: "15px" }}
            whileTap={{ scale: 0.95 }}
            onClick= {handleMoveSelect}
        >
            { move }
        </motion.div>
    );
}

export default ListedMove;