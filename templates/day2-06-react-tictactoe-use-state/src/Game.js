import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));

	const handleClick = (i) => {
		const newSquares = [...squares];
		newSquares[i] = 'X';
		setSquares(newSquares);
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>Next player: ???</div>
			</div>
		</div>
	);
}
