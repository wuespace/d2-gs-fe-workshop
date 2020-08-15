import React from 'react';

export default function HistoryList(props) {
	return (
		<ol>
			{props.history.map((_, index) => {
				const description = index > 0
      		? `Go to move #${index}`
					: 'Go to game start';
			
				return (
      		<li key={index}>
        		<button onClick={() => props.onJump(index)}>{description}</button>
      		</li>
    		);
			})}
		</ol>
	);
}
