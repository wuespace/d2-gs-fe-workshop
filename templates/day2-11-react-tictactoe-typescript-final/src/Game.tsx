import React, { useState } from 'react';
import Board from './Board';
import HistoryList from './HistoryList';

import { History } from './types';

import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// enthält alle getanen Spielzüge als Objekte im Array
	const [history, setHistory] = useState<History>([{
		squares: Array(9).fill('')
	}]);
	const [step, setStep] = useState(0);

	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i: number) => {
		// alles auspacken
		const lastingHistory = history.slice(0, step + 1);
		const { squares } = history[step];
		
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setWinner(newWinner);

			setHistory(lastingHistory.concat([{
				squares: newSquares
			}]));
			setStep(lastingHistory.length);
		}
	};

	const handleStep = (step: number) => {
		setStep(step);
		setXIsNext((step % 2) === 0);
	};

	const { squares } = history[step];

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
				<HistoryList history={history} onJump={handleStep} />
			</div>
		</div>
	);
}
