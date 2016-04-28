import { Router, Route, IndexRoute } from 'react-router';
import Layout from 'Layout.js';
import HomePage from './pages/HomePage.js';
import PokemonPage from './pages/PokemonPage.js';
import {createHashHistory} from 'history';

var history = createHashHistory();

export default class Routes extends React.Component {

	render() {
		return (
			<Router history={history}>
				{/*<Router history={this.props.history}>*/}
				<Route path="/" component={Layout}>

					{/* Default component for / path (Default pokedex pages) */}
					<IndexRoute component={HomePage} />

					{/* Detailed pokemon view */}
					<Route path="/:pokemonId,:pokemonPage" component={PokemonPage} />

					{/* You can render 404 page component here */}
					<Route path="*" component={HomePage}/>
				</Route>
			</Router>
		);
	}

}