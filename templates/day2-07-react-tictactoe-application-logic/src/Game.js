import React, { useState } from 'react';
import Board from './Board';
// ACHTUNG! Hier wurde was eingebunden!
import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i) => {
		// noch ein Check!
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setSquares(newSquares);
			setWinner(newWinner);
		}
	};

	const status = winner !== ''
		? `${winner} wins`
		: `Next player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
			</div>
		</div>
	);
}
