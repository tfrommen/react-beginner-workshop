import React from 'react';

function Hello( props ) {
	return <h1>Hello { props.name || 'World' }!</h1>;
}

export default Hello;
