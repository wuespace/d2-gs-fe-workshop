import React from 'react';
import ListElement from './ListElement';

interface Props {
	items: string[];
	deleteItem: (index: number) => void;
}

export default function List({ items, deleteItem }: Props) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={item}>
					<ListElement value={item} onDelete={() => deleteItem(index)} />
				</li>
			))}
			{items.length === 0 && (
				<li>No Todos. Add some!</li>
			)}
		</ul>
	);
}
