import React from 'react';
import Square from './Square';

export default function Board(props) {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i) => (
		<Square
			value={props.squares[i]}
			onClick={() => props.onClick(i)} // Hier übergeben wir den Index für das Square
		/>
	);

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}
