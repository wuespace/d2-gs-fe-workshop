**Fragen** sind fett

_Moderator-Aktionen_ sind kursiv

# Einführung/Definitionen

- _aus dem Repo den Ordner `templates/day2-00-react-plain` öffnen_
- bitte die **React DevTools** aus dem Chrome-Addon-Store installieren

## 01-react-intro

- React ist nichts weiter als Javascript
- Eine Datei, die auf einer HTML-Seite eingebunden wird
- React hängt sich in das gegebene Element ein und generiert die definierte DOM-Struktur dazu + noch vieles mehr (im Hintergrund passiert noch mehr)
- _index.html mit `<div id="root"></div>` element zeigen_

```js
import React from 'react';
import ReactDOM from 'react-dom';

// React ist nichts weiter als Javascript
const MyComponent = React.createElement('div', null, 'Hello World');

ReactDOM.render(MyComponent, document.getElementById('root'));
```

## 02-react-jsx

- "reines" Javascript ist aufwändig und unübersichtlich, alles mit `React.createElement(...)` zu schreiben
- JSX kommt zur Hilfe -> _einmal zeigen, wie aus dem konstanten `div` ein JSX wird_
- Warum? wesentlich übersichtlicher und intuitiver
- Man kann ganz einfach native DOM-Elemente rendern

```js
ReactDOM.render(
	<div>
		<h2>Hey there!</h2>
		<button>Click Me!</button>
	</div>,
	document.getElementById('root')
);
```

- jetzt kann man noch lauter Komponenten draus machen
- Was ist eine Komponente!? eine Abstrahierung von einer definierten DOM-Struktur
- Warum macht man das? Wiederverwendbarkeit und wieder bessere Übersicht
- in großen Projekten gibt es viele Komponenten, die man wiederverwenden möchte

```js
ReactDOM.render(
	<div>
		<MyComponent />
		<MyButton />
	</div>,
	document.getElementById('root')
);

function MyComponent() {
	return (
		<div>
			<MyLabel />
			<MyButton />
		</div>
	);
}

function MyLabel() {
	return (
		<div>My awesome label</div>
	);
}

function MyButton() {
	return (
		<button>Click Me!</button>
	);
}
```

## 03-react-tictactoe-template

- aus dem Repo das Projekt `templates/day2-03-react-tictactoe-template` öffnen
- lasst uns TicTacToe zusammen bauen
- _Projekt wechseln_

## 04-react-tictactoe-basic-structure

- Erstmal die Grundstruktur: **Was brauchen wir für Komponenten? Irgendwelche Ideen?**
	-> Square, Board, Game
- Implementieren wir die mal…

```js
// Square.js
import React from 'react';

export default function Square() {
	return (
		<button className="square" onClick={() => alert('Hello!')}>
			{/* Hier fehlt was */}
		</button>
	);
}
```

```js
// Board.js
import React from 'react';
import Square from './Square';

export default function Board() {
	return (
		<div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
		</div>
	);
}
```

```js
// Game.js
import React from 'react';
import Board from './Board';

export default function Game() {
	return (
		<div className="game">
			<div className="game-board">
				<Board />
			</div>
			<div className="game-info">
				<div>Next player: ???</div>
			</div>
		</div>
	);
}
```

- Ok. Abspeichern und anschauen. Hey, das sieht doch gut aus!
- _React DevTools zeigen_ Hier sieht man auch nochmal die Komponentenstruktur

## 05-react-tictactoe-props

- Das Square muss irgendwie wissen, was es anzeigen soll
- Dafür gibt es in React "Props" oder "Properties"
- _zeigen mit Square-Komponente_

```js
// Square.js
import React from 'react';

// hier gibts Props
export default function Square(props) {
	return (
		<button className="square">
			{props.value}
		</button>
	);
}
```

```js
// Board.js
import React from 'react';
import Square from './Square';

export default function Board() {
	return (
		<div>
			<div className="board-row">
				<Square value={0} />
				<Square value={1} />
				<Square value={2} />
			</div>
			<div className="board-row">
				<Square value={3} />
				<Square value={4} />
				<Square value={5} />
			</div>
			<div className="board-row">
				<Square value={6} />
				<Square value={7} />
				<Square value={8} />
			</div>
		</div>
	);
}
```

- schick, oder? Wir sagen der Square-Komponente, nimm `value` und packe sie in das Button-Element als Label, der Rest ist dir komplett egal
- Ok, jetzt muss jeder, der die Square-Komponente benutzt, noch eine `value` mitgeben
- **Wie können wir der Square-Komponente beibringen, hey, wenn du gedrückt wurdest, zeige bitte ein Alert an?**
- man kann nicht nur "einfache" Datentypen wie Strings, Numbers, Booleans, Arrays mitgeben, sondern auch Funktionen, oder "komplexere" Sachen übergeben

```js
// Square.js
import React from 'react';

// hier gibts Props
export default function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
```

```js
// Board.js
import React from 'react';
import Square from './Square';

export default function Board() {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i) => (
		<Square
			value={i}
			onClick={() => alert(`Clicked ${i}!`)}
		/>
	);

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}
```

- um dem "Nummerwahn" entgegen zu wirken, packen wir das Rendering in eine Funktion, der wir nur die Nummer mitgeben -> übersichtlicher und kürzer zu schreiben

## 06-react-tictactoe-use-state

- irgendwie fehlt noch die gesamte Logik vom Spiel
- wir können im Moment auch nichts zwischenspeichern
- was ändern -> es soll sich ein Zustand ändern (von einem Zustand in den nächsten wechseln)
- React ist zustandsbasiert, also, was kann es alles für Zustände geben?
- Um in Functional Components einen Zustand zu erzeugen, `useState()` Hook benutzen
- "Hook" ist eine Funktion, die sich in den Render-Prozess von React "einklingt" und erweiterte Möglichkeiten in der Anwendung bietet (hier Zustand)
- in der State-Hook kann man alles mögliche speichern: Warum nicht erstmal im Square?
- können wir machen -> _Code zeigen_

```js
import React, { useState } from 'react';

// hier gibts Props
export default function Square(props) {
	const [value, setValue] = useState();

	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
```

- _Was setzt man wo bei dieser Hook? current value, wie updatet man diese value?_
- **Wie können wir jetzt dem Button die "State"-Value rendern lassen, anstatt die aus den Props?**

```js
export default function Square(props) {
	const [value, setValue] = useState();

	return (
		<button className="square" onClick={props.onClick}>
			{value}
		</button>
	);
}
```

- **Und wie updaten wir die aktuelle Value z.B. auf ein 'X', wenn der Nutzer den Button angeklickt hat?**

```js
import React, { useState } from 'react';

// hier gibts Props
export default function Square(props) {
	const [value, setValue] = useState();

	const handleClick = () => {
		setValue('X');
	};

	return (
		<button className="square" onClick={handleClick}>
			{value}
		</button>
	);
}
```

- Aber jetzt kennen die anderen Komponenten den Zustand unserer Komponente nicht
- **Irgendeine Idee, wie wir den Zustand an alle weitergeben können?**
- jawohl, einmal nach oben im Komponentenbaum
- und über die Props reichen wir alles wieder runter

```js
// Game.js
import React from 'react';
import Board from './Board';

export default function Game() {
	// welche Datenstruktur?
	const [squares, setSquares] = useState();

	return (
		<div className="game">
			<div className="game-board">
				{/* wir müssen dem Board auch noch irgendwie 'squares' beibringen */}
				<Board />
			</div>
			<div className="game-info">
				<div>Next player: ???</div>
			</div>
		</div>
	);
}
```

- **Irgendwelche Ideen?**
- Arrays? Gute Idee! Wir nehmen ein 9. stelliges Array, so wie wir aus dem vorherigen Beispiel gesehen haben (0,1,2,3,...), speichern das und reichen es wieder runter

```js
// Game.js
import React from 'react';
import Board from './Board';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} />
			</div>
			<div className="game-info">
				<div>Next player: ???</div>
			</div>
		</div>
	);
}
```

- erinnert ihr euch an diese Funktion, die ein Square "gebaut" hat?

```js
// Board.js
import React from 'react';
import Square from './Square';

export default function Board(props) {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i) => (
		<Square
			value={props.squares[i]} // HIER!!!
			onClick={() => alert(`Clicked ${i}!`)}
		/>
	);

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}
```

- und den "lokalen" State aus dem Square wieder entfernen

```js
// Square.js
import React from 'react';

// hier gibts Props
export default function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
```

- **Kann mir jemand erklären, was hier jetzt passieren sollte?**
- Aha! Jetzt nimmt sich jedes Square seinen eigenen Daten aus dem gegebenen Array
- **Jetzt fehlt nur noch das Updaten von diesem "globalen" Array durch den Button-Click. Wieder soll ein 'X' erscheinen, wenn man den Button drückt. Irgendwelche Ideen?**
- Tipp: Wir haben die setSquares-Methode und wir haben Props, in denen wir auch Funktionen runterreichen können. Und der Index zu jedem Square existiert auch schon ^^
- _einmal korrekt implementieren_

```js
// Game.js
import React from 'react';
import Board from './Board';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));

	const handleClick = (i) => {
		const newSquares = [...squares];
		newSquares[i] = 'X';
		setSquares(newSquares);
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>Next player: ???</div>
			</div>
		</div>
	);
}
```

```js
// Board.js
import React from 'react';
import Square from './Square';

export default function Board(props) {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i) => (
		<Square
			value={props.squares[i]}
			onClick={() => props.onClick(i))} // Hier übergeben wir den Index für das Square
		/>
	);

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}
```

- und zack, können wir "beliebig" viele Squares speichern und verwalten

## 07-react-tictactoe-application-logic

- Wir müssen noch bei jedem Klick von `X` auf `O` wechseln (Zwei-Spieler-Spiel)
- **Was brauchen wir?**
- einen neuen Zustand

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = (i) => {
		const newSquares = [...squares];
		newSquares[i] = xIsNext ? 'X' : 'O';

		setXIsNext(!xIsNext);
		setSquares(newSquares);
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>Next player: {xIsNext ? 'X' : 'O'}</div>
			</div>
		</div>
	);
}
```

- Problem hier noch, man kann schon gesetzte Elemente wieder überschreiben
- **Wie lösen wir das?**

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = (i) => {
		if (squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			setXIsNext(!xIsNext);
			setSquares(newSquares);
		}
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>Next player: {xIsNext ? 'X' : 'O'}</div>
			</div>
		</div>
	);
}
```

- machen wir einen Check drum rum
- so jetzt fehlt nur noch die Gewinner-Kalkulation und die Ausgabe dazu
- **Was brauchen wir?** -> Wieder einen State :P

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';
// ACHTUNG! Hier wurde was eingebunden!
import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// wir füllen zum Start das Array mit lauter leeren Strings
	// oder auch ['', 'X', 'O', ...]
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i) => {
		// noch ein Check!
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setSquares(newSquares);
			setWinner(newWinner);
		}
	};

	const status = winner !== ''
		? `${winner} wins`
		: `Next player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
			</div>
		</div>
	);
}
```

- Fertig! Jetzt könnt ihr TicTacToe gegen euch selbst spielen! :D

## 08-react-tictactoe-history

- Wir möchten jetzt eine History implementieren, in der man zurück und vorwärts springen kann
- **Hat jemand eine Idee zur Datenstruktur?** Eine Runde Brainstormen
- Ein Array, dass das Squares-Array zu jeden Zeitpunkt hält, ist doch interessant
		+ ein weiterer Wert, der anzeigt, in welcher "Zeit" wir uns befinden

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';

import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// enthält alle getanen Spielzüge als Objekte im Array
	const [history, setHistory] = useState([{
		squares: Array(9).fill('')
	}]);
	const [step, setStep] = useState(0);

	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i) => {
		// alles auspacken
		const lastingHistory = history.slice(0, step + 1); // von 0 bis ausschließlich step + 1
		const { squares } = history[step];
		
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setWinner(newWinner);

			setHistory(lastingHistory.concat([{
				squares: newSquares
			}]));
			setStep(lastingHistory.length); // Achtung 0-indexiert also hier um 1 länger
		}
	};

	const { squares } = history[step];

	const status = winner !== ''
		? `${winner} wins`
		: `Next player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
			</div>
		</div>
	);
}
```

- Jetzt müssen wir nur noch den Step wechseln können
- **Wieder irgendwelche Ideen?**
- genau! eine weitere Funktion, die den `step` bekommt, zu dem wir springen sollen und setStep aufruft

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';

import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// enthält alle getanen Spielzüge als Objekte im Array
	const [history, setHistory] = useState([{
		squares: Array(9).fill('')
	}]);
	const [step, setStep] = useState(0);

	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i) => {
		// alles auspacken
		const lastingHistory = history.slice(0, step + 1);
		const { squares } = history[step];
		
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setWinner(newWinner);

			setHistory(lastingHistory.concat([{
				squares: newSquares
			}]));
			setStep(lastingHistory.length);
		}
	};

	const handleStep = (step) => {
		setStep(step);
		setXIsNext((step % 2) === 0);
	};

	const { squares } = history[step];

	const status = winner !== ''
		? `${winner} wins`
		: `Next player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
			</div>
		</div>
	);
}
```

- Zum Schluss brauchen wir noch irgendwas, wie ein User-Interface, dass die gespeicherte History anzeigt und man darin wechseln kann

```js
// HistoryList.js
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
```

```js
// Game.js
import React, { useState } from 'react';
import Board from './Board';
import HistoryList from './HistoryList';

import calculateWinner from './lib/calculateWinner';

export default function Game() {
	// enthält alle getanen Spielzüge als Objekte im Array
	const [history, setHistory] = useState([{
		squares: Array(9).fill('')
	}]);
	const [step, setStep] = useState(0);

	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState('');

	const handleClick = (i) => {
		// alles auspacken
		const lastingHistory = history.slice(0, step + 1);
		const { squares } = history[step];
		
		if (winner === '' && squares[i] === '') {
			const newSquares = [...squares];
			newSquares[i] = xIsNext ? 'X' : 'O';
	
			const newWinner = calculateWinner(newSquares);

			setXIsNext(!xIsNext);
			setWinner(newWinner);

			setHistory(lastingHistory.concat([{
				squares: newSquares
			}]));
			setStep(lastingHistory.length);
		}
	};

	const handleStep = (step) => {
		setStep(step);
		setXIsNext((step % 2) === 0);
	};

	const { squares } = history[step];

	const status = winner !== ''
		? `${winner} wins`
		: `Next player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
				<HistoryList history={history} onJump={handleStep} />
			</div>
		</div>
	);
}
```

- Geschafft! Jetzt könnt ihr an der Seitenleiste mitverfolgen, welche Züge gemacht wurden

## 09-react-tictactoe-final

- für alle, die nicht mitgekommen sind, hier der aktuelle Stand `templates/day2-09-react-tictactoe-final`

## 10-react-tictactoe-typescript

- Wie ihr vielleicht gemerkt habt, sind die `props` nicht wirklich typsicher
- Typsicher? Das ruft nach Typescript!
- Also wie integrieren wir Typescript in eine React-App?
- Ganz einfach!
	1. Typescript installieren: `npm install typescript`
	2. Alle Dateiendungen von .js nach .tsx für React-Components
	3. von normalen Javascript-Files von .js nach .ts
	4. eine `tsconfig.json` ins Hauptverzeichnis legen
	5. Type-Pakete installieren: `npm install @types/react @types/react-dom @types/node @types/jest`

```json
// tsconfig.json
{
	"compilerOptions": {
		"target": "es5",
		"lib": [
			"dom",
			"dom.iterable",
			"esnext"
		],
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react"
	},
	"include": [
		"src"
	]
}
```

- Jetzt springt uns Typescript an und sagt, hier ist alles `any`
- wir brauchen Typen! **Wie sehen die aus?**

```ts
// types.ts
export type Squares = Array<string>;

export type History = Array<{ squares: Squares }>;
```

- viele der Hooks aus `Game.tsx` haben schon ordentliche Typen aus der Type Inference
- Die `history` braucht noch etwas Nachhilfe, das machen wir mit den spitzen Klammern

```ts
// Game.tsx
// enthält alle getanen Spielzüge als Objekte im Array
const [history, setHistory] = useState<History>([{
	squares: Array(9).fill('')
}]);
```

- und die Click-Handler brauchen auch noch Typisierungen

```ts
// Game.tsx
const handleClick = (i: number) => {...};

const handleStep = (step: number) => {...};
```

- die Properties einer Komponente kann man auch typen
- _am Square.tsx vorführen_

```ts
// Square.tsx
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
```

- Wir brauchen noch Prop-Types für `HistoryList.tsx` und `Board.tsx`
- **Wie sehen die aus?**

```ts
// HistoryList.tsx
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

```

```ts
// Board.tsx
import React from 'react';
import Square from './Square';
import { Squares } from './types';

interface Props {
	squares: Squares;
	onClick: (i: number) => void;
}

export default function Board({ squares, onClick }: Props) {
	// eine Funktion, die ein JSX Element zusammenbaut
	const renderSquare = (i: number) => (
		<Square
			value={squares[i]}
			onClick={() => onClick(i)} // Hier übergeben wir den Index für das Square
		/>
	);

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

```

- die Library-Funktion braucht auch noch ein paar Typen:

```ts
// lib/calculateWinner.ts
import { Squares } from "../types";

export default function calculateWinner(squares: Squares): string {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return '';
}
```

- Und schon sind wir typsicher unterwegs!

## 11-react-todo-list-template

- Zur Open-Hacking-Time könnt ihr gerne probieren, eine Todo-Liste zu implementieren (_zeigen_)
- Hier gibts noch das Template dazu: `templates/day2-10-react-todo-list-template` mit dem ihr direkt starten könnt
- Viel Spaß
