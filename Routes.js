import { Router, Route, IndexRoute } from 'react-router';
import Layout from 'Layout.js';
import HomePage from 'pages/HomePage.js';


export default class Routes extends React.Component {

	render() {
		return (
			<Router history={ this.props.history }>

				<Route path="/" component={Layout}>
					{/* Default component for / path */}
					<IndexRoute component={HomePage}/>

					{/* You can render any other page component here */}
					{/* <Route path="/someOtherPath" component={SomeOtherComponent}/> */}
					<Route path="/home" component={HomePage}/>

					{/* You can render 404 page component here */}
					<Route path="*" component={HomePage}/>
				</Route>
			</Router>
		);
	}
}