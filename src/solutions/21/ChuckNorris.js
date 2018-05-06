import React, { Component } from 'react';

import axios from 'axios';

class ChuckNorris extends Component {
	state = {
		fact: '',
		isLoading: false,
	};

	fetchFact = () => {
		this.setState( { isLoading: true } );
		axios( 'https://api.chucknorris.io/jokes/random' )
			.then( ( { data } ) => {
				this.setState( {
					fact: data.value || '',
					isLoading: false,
				} );
			} )
			.catch( ( error ) => {
				this.setState( {
					fact: '',
					isLoading: false,
				} );
				console.error( error );
			} );
	};

	render() {
		const {
			fact,
			isLoading,
		} = this.state;

		const hasFact = fact || false;

		return (
			<div>
				{ isLoading ? <p><em>Loading&hellip;</em></p> : (
					hasFact && <p>{ fact }</p>
				) }
				<button disabled={ isLoading } onClick={ () => this.fetchFact() }>{ hasFact ? 'Reload' : 'Load' }</button>
				{ hasFact && <button onClick={ () => this.setState( { fact: '' } ) } >Delete</button> }
			</div>
		);
	}
}

export default ChuckNorris;
