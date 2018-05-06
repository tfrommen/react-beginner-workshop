// Let's add some type-checking for our props, and also handle default values differently.
// We can do this with the help of the prop-types package.

import React from 'react';

function Hello( props ) {
	return <h1>Hello { props.name || 'World' }!</h1>;
}

export default Hello;
