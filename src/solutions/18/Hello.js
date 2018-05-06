import React from 'react';
import PropTypes from 'prop-types';

function Hello( props ) {
	return <h1>Hello { props.name }!</h1>;
}

Hello.propTypes = {
	name: PropTypes.string,
};

Hello.defaultProps = {
	name: 'World',
};

export default Hello;
