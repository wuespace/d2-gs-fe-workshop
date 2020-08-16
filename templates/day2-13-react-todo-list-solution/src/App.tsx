import React, { useState } from 'react';

import './styles.css';

import AddItem from './AddItem';
import List from './List';

export default function App() {
	// app state that stores the todo items
	const [items, setItems] = useState<string[]>([]);

	const addItem = (newItem: string) => {
		setItems(prevItems => [...prevItems, newItem]);
	};

	const deleteItem = (removeIndex: number) => {
		setItems(prevItems =>
			prevItems.filter((_, index) => index !== removeIndex)
		);
	};

  return (
    <div className="App">
			<h1>My Todo List</h1>
			<AddItem addItem={addItem} />
			<List items={items} deleteItem={deleteItem} />
    </div>
  );
}
