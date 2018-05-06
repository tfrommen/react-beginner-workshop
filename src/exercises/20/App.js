// Do you like Chuck Norris, or Chuck Norris jokes/facts?
// Let's add an according component.

import React, { Component, Fragment } from 'react';

import ColorButton from './ColorButton';
import Hello from './Hello';

class App extends Component {
	state = {
		backgroundColor: '',
	};

	setBackgroundColor = ( backgroundColor ) => {
		this.setState( { backgroundColor }, () => {
			document.body.style.backgroundColor = this.state.backgroundColor;
		} );
	};

	renderColorButtons = () => {
		const colors = [
			'#c0ffee',
			'#baddad',
			'#facade',
		];

		return colors.map( ( color ) => (
			<ColorButton key={ color } color={ color } onClick={ this.setBackgroundColor } />
		) );
	};

	render() {
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
						<input
							value={ this.state.backgroundColor }
							onChange={ ( e ) => this.setBackgroundColor( e.target.value ) }
						/>
					</label>
				</p>
				{ this.renderColorButtons() }
			</Fragment>
		);
	}
}

export default App;
