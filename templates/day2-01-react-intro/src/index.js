import React from 'react';
import ReactDOM from 'react-dom';

// React ist nichts weiter als Javascript
const MyComponent = React.createElement('div', null, 'Hello World');

ReactDOM.render(MyComponent, document.getElementById('root'));
