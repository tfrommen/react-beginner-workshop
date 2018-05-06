//
// Hey, hi!
//
// Welcome to this (semi-improvised) React beginner workshop at WordCamp Retreat Soltau 2018.
//
// You find the exercises in the exercises folder. They contain (hopefully) helpful comments.
// Possible solutions are available - who would have expected that - in the solutions folder.
//
// For the first several exercises, we use the require() syntax below.
// Once we reach the state where we can (and will) import modules, we do this by using the second code snippet.
// You can easily "swap" the two styles by deleting one of the two asterisks, *, in the first comment (in line 16).
//
// Have fun!
//

/**/

// Use for exercises 0 - 6.

require( './exercises/0' );

/*/

// Use for exercises 7 - n.

import React from 'react';
import { render } from 'react-dom';

import App from './exercises/7/App';

render(
	<App/>,
	document.getElementById( 'root' )
);

/**/
