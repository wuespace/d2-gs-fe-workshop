import React from 'react';

interface Props {
	value: string;
	onClick: () => void;
}

// hier gibts Props
export default function Square({ value, onClick }: Props) {
	return (
		<button className="square" onClick={onClick}>
      {value}
    </button>
	);
}
