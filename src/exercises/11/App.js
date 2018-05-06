// Now, React allows us to easily handle events.
// Let's add a simple button that reacts to us clicking it.

import React, { Fragment } from 'react';

import Hello from './Hello';

function App() {
	return (
		<Fragment>
			<Hello name="Thorsten" />
			<p>Let's learn some React.</p>
		</Fragment>
	);
}

export default App;
