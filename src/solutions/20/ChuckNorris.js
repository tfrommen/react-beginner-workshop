import React, { Component } from 'react';

import axios from 'axios';

class ChuckNorris extends Component {
	state = {
		fact: '',
	};

	fetchFact = () => {
		axios( 'https://api.chucknorris.io/jokes/random' )
			.then( ( { data } ) => {
				this.setState( { fact: data.value || '' } );
			} )
			.catch( ( error ) => {
				this.setState( { fact: '' } );
				console.error( error );
			} );
	};

	render() {
		const { fact } = this.state;

		const hasFact = fact || false;

		return (
			<div>
				{ hasFact && <p>{ fact }</p> }
				<button onClick={ () => this.fetchFact() }>{ hasFact ? 'Reload' : 'Load' }</button>
				{ hasFact && <button onClick={ () => this.setState( { fact: '' } ) } >Delete</button> }
			</div>
		);
	}
}

export default ChuckNorris;
