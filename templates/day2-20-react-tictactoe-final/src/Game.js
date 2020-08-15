import React, { useState } from 'react';
import Board from './Board';

import calculateWinner from './lib/calculateWinner';

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [step, setStep] = useState(0);
  
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState();

  const handleClick = (i) => {
    const partHistory = history.slice(0, step + 1);
    const current = partHistory[partHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(partHistory.concat([
      {
        squares,
      }
    ]));
    setStep(partHistory.length);
    setXIsNext(prevState => !prevState);
  };

  const jumpTo = (step) => {
    // setHistory(prevHistory => prevHistory.slice(0, step + 1));
    setStep(step);
    setXIsNext((step % 2) === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move
      ? 'Go to move #' + move
      : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const current = history[step];
  const winner = calculateWinner(current);

  console.log(winner);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  console.log(status);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
