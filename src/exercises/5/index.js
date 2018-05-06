// Because App can become rather large, we move it into a separate file.
// Please find App.js next to this file.
// To make use of this file (or rather the defined module), we use ES6 imports.

import React from 'react';
import { render } from 'react-dom';

function App() {
	return <h1>Hello World!</h1>;
}

const root = document.getElementById( 'root' );

const element = <App />;

render( element, root );
