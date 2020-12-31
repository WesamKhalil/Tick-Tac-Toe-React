import React from 'react'
import "./Box.css"

const Box = ({handleClick, value}) => {
    const styling = value ? "box " + value : "box"

    return (
        <div 
            onClick={handleClick}
            className={styling}
            >
            {value}
        </div>
    )
}

export default Box
