import React from 'react'
import Square from './Square';

export default function Board(props) {
    const renderSquare = (i) => (
        <Square
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />
    );

    return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
      </div>
    );
}
