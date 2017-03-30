const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		home: './src/home.js',
		about: './src/about.js',
		contact: './src/contact.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: "[name].bundle.js"
	},
	watch: false,
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor.js'),
		
		new HtmlWebpackPlugin({
            template: 'index.html'
        })
	]
};
