import React from 'react';
import PropTypes from 'prop-types';

function ColorButton( props ) {
	const {
		color,
		onClick,
	} = props;

	return <button onClick={ () => onClick( color ) }>{ color }</button>;
}

ColorButton.propTypes = {
	color: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ColorButton;
