// Event handling wouldn't be called event handling when there weren't any events to be handled. Right? ;)
// Let's add an input field and interact with the value we put in it.
// We want to make a color field that changes the background color of the body element.

import React, { Fragment } from 'react';

import Hello from './Hello';

function App() {
	return (
		<Fragment>
			<Hello name="Thorsten" />
			<p>Let's learn some React.</p>
			<button onClick={ () => alert( 'Cool!' ) }>Sure!</button>
		</Fragment>
	);
}

export default App;
