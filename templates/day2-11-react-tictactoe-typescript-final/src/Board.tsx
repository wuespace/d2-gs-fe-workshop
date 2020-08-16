import React from 'react';
import Square from './Square';
import { Squares } from './types';

interface Props {
	squares: Squares;
	onClick: (i: number) => void;
}

export default function Board({ squares, onClick }: Props) {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i: number) => (
		<Square
			value={squares[i]}
			onClick={() => onClick(i)} // Hier übergeben wir den Index für das Square
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
