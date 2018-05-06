// We want to refine the headline, so we might want to make it a separate component.
// Move it to the Hello.js file, which we import here.

import React, { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<h1>Hello World!</h1>
			<p>Let's learn some React.</p>
		</Fragment>
	);
}

export default App;
