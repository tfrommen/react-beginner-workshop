// Color buttons are cool.
// Let's add a couple more.

import React, { Component, Fragment } from 'react';

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
				<button onClick={ () => this.setBackgroundColor( '#c0ffee' ) }>#c0ffee</button>
			</Fragment>
		);
	}
}

export default App;
