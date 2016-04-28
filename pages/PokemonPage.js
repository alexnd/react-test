import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList';
import PokemonDetails from '../components/PokemonDetails';

class PokemonPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container2">
				<div className="leftpane">
					<div className="container">
						<PokemonsList paramPage={this.props.params.pokemonPage}/>
					</div>
				</div>
				<div className="rightpane">
					<PokemonDetails paramId={this.props.params.pokemonId}/>
				</div>
			</div>
		);
	}
}

export default PokemonPage;
