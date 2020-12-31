import React from 'react'
import Box from "./Box.js"
import "./Board.css"

const Board = ({list, handleClick}) => (
    <div className="board">
        {list.map((val, ind) => (
        <Box 
            key={"box" + ind}
            value={val}
            handleClick={() => handleClick(ind)}
            />
    ))}
    </div>
)

export default Board
