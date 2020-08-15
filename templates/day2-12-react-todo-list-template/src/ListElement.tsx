import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function ListElement() {
	return (
		<div className="ListElement">
			<span>Hmm, das ist statisch</span>
			<span>
				<button className="danger-button" onClick={() => alert('Implementiere mich!')}>
					<FaTrashAlt />
				</button>
			</span>
		</div>
	);
}
