import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList';

class HomePage extends React.Component {

	render() {
		return (
			<div className="container">
				<PokemonsList paramPage={0}/>
			</div>
		);
	}
}

export default HomePage;
