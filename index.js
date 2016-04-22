import ReactDOM from 'react-dom';
import Routes from 'Routes.js';
import { history } from 'xhistory.js';

require('./scss/main.scss');

// Images
var requireImgs = require.context('./images/', true, /\.(jpe?g|png|gif|ico)$/i);
requireImgs.keys().forEach(requireImgs);

// Setup App
ReactDOM.render(<Routes history={ history }/>, document.getElementById('root'));
