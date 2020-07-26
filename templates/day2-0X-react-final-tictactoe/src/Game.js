import React, { useState } from 'react';

export default function Game() {
    const [history, setHistory] = useState([]);
    const [step, setStep] = useState(0);
    const [xIsNext, setXisNext] = useState(true);



    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
      </div>
    )
}
