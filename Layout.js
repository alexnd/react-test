import { Link } from 'react-router';


class Layout extends React.Component {

	render() {
		console.log('[Global vars]:', _, React);

		return (
			<div className="page-content">
				<h1>Layout</h1>
				<hr/>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;
