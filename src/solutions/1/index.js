import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById( 'root' );

const element = React.createElement( 'h1', {
	children: 'Hello World!',
} );

render( element, root );
