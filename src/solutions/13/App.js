import React, { Component, Fragment } from 'react';

import Hello from './Hello';

class App extends Component {
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
						<input onChange={ ( e ) => document.body.style.backgroundColor = e.target.value } />
					</label>
				</p>
			</Fragment>
		);
	}
}

export default App;
