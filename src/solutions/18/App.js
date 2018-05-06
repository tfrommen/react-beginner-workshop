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
				<ColorButton color="#c0ffee" onClick={ this.setBackgroundColor } />
				<ColorButton color="#baddad" onClick={ this.setBackgroundColor } />
				<ColorButton color="#facade" onClick={ this.setBackgroundColor } />
			</Fragment>
		);
	}
}

export default App;
