// Wouldn't it be cool to be able to pass data to the Hello component?
// Well, we can. This happens via attributes (or props).
// Let's pass our individual first name (using an attribute with the name "name").

import React, { Fragment } from 'react';

import Hello from './Hello';

function App() {
	return (
		<Fragment>
			<Hello />
			<p>Let's learn some React.</p>
		</Fragment>
	);
}

export default App;
