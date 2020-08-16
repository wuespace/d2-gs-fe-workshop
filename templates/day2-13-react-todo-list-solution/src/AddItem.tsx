import React, { useState, KeyboardEvent } from 'react';

import isValid from './lib/isValid';

interface Props {
	addItem: (newItem: string) => void;
}

export default function AddItem({ addItem }: Props) {
	// stores local value in the input
	const [value, setValue] = useState('');

	const handleClick = () => {
		if (isValid(value)) {
			// add item to global state
			addItem(value);

			// reset local value
			setValue('');
		}
	};

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleClick();
		}
	};

	return (
		<div className="AddItem">
			<input
				value={value}
				placeholder="Your next todo"
				onChange={event => setValue(event.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button onClick={handleClick}>Add</button>
		</div>
	);
}
