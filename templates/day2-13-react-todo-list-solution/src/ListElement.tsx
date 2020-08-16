import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

interface Props {
	value: string;
	onDelete: () => void;
}

export default function ListElement({ value, onDelete }: Props) {
	return (
		<div className="ListElement">
			<span>{value}</span>
			<span>
				<button className="danger-button" onClick={onDelete}>
					<FaTrashAlt />
				</button>
			</span>
		</div>
	);
}
