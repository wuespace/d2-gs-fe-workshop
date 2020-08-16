import React from 'react';
import { History } from './types';

interface Props {
	history: History;
	onJump: (index: number) => void;
}

export default function HistoryList({ history, onJump }: Props) {
	return (
		<ol>
			{history.map((_, index) => {
				const description = index > 0
      		? `Go to move #${index}`
					: 'Go to game start';
			
				return (
      		<li key={index}>
        		<button onClick={() => onJump(index)}>{description}</button>
      		</li>
    		);
			})}
		</ol>
	);
}
