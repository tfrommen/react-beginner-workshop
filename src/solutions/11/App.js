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
