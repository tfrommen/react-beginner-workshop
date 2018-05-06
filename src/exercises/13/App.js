// Components don't have to be functions.
// We can also make it a class (extending one of the Component classes coming with React).
// Let's do this now.

import React, { Fragment } from 'react';

import Hello from './Hello';

function App() {
	const inputId = 'background-color';

	return (
		<Fragment>
			<Hello name="Thorsten" />
			<p>Let's learn some React.</p>
			<button onClick={ () => alert( 'Cool!' ) }>Sure!</button>
			<hr />
			<p>
				<label htmlFor={ inputId }>
					Background color:
					<input onChange={ ( e ) => document.body.style.backgroundColor = e.target.value } />
				</label>
			</p>
		</Fragment>
	);
}

export default App;
