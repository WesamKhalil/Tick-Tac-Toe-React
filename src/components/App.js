import React, { useState } from 'react'
import Board from "./Board.js"
import check from "../check.js"
import "./App.css"

const App = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [step, setStep] = useState(0)
    const [turn, setTurn] = useState(true)
    const xO = turn ? "X" : "O"
    const won = check(history[step])
    
    const handleClick = ind => {
        const pastHistory = history.slice(0, step + 1)
        const currentHistory = [...history[step]]

        if(!(won || currentHistory[ind])) {
            currentHistory[ind] = xO
            setHistory([...pastHistory, currentHistory])
            setStep(pastHistory.length)
            setTurn(!turn)
        }
    }

    const goBack = index => {
        setStep(index)
        setTurn(index % 2 === 0)
    }

    const renderHistory = () => 
        history.map((val, ind) => {
            const text = ind !== 0 ? `Go to move #${ind}.` : "Reset!"
            return(
                <button
                    className="history-button" 
                    onClick={() => goBack(ind)}
                    key={"history" + ind}>
                    {text}
                </button>
            )
            })

    return (
        <div className="app-cont">
            <h1>Tic Tac Toe.</h1>
            <Board 
                handleClick={handleClick}
                list={history[step]}/>
            <div className="subsection">
                <div className="history">
                    <h3>History</h3>
                    {renderHistory()}
                </div>
                <h3>{won ? `Winner: ${won}` : `Next turn is: ${xO}`}</h3>
            </div>
        </div>
    )
}

export default App
