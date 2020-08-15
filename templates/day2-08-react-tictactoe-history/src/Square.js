import React from 'react';

// hier gibts Props
export default function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
      {props.value}
    </button>
	);
}
