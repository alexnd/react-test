var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

	entry: {
		bundle: ['webpack-hot-middleware/client', './index']
	},

	output: {
		filename: 'bundle.js', // Will output App_wp_bundle.js
		path: path.join(__dirname, "static"),
		publicPath: '/static/' // Required for webpack-dev-server
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
				//query: {
				//	presets: [
				//		require.resolve('babel-preset-es2015'),
				//		require.resolve('babel-preset-react'),
				//		require.resolve('babel-preset-stage-0')
				//	]
				//}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file?name=[name].[ext]?[hash]'
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loader: 'file?name=[name].[ext]?[hash]'
			}
		]
	},

	resolve: {
		root: [
			path.join(__dirname, "")
		]
	},

	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
			'React': 'react',
			'_': 'lodash'
		})
	]
};
