// Feel the power of JSX.
// We can write something that is pretty close to HTML markup.
// In fact, it is syntactic sugar on top of JavaScript, meaning a function call.

import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById( 'root' );

const element = React.createElement( 'h1', {
	children: 'Hello World!',
} );

render( element, root );
