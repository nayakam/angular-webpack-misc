var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		app:  './app/app.js',
		about: './about/about.js',
		vendor: ['jquery']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'src')
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		stats: {
			colors: true,
			reasons: true,
			chunks: false,
			modules: false
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			hash: true,
			chunks:['app','boostrap','commons','vendor']
			//excludeChunks: ['about']
		}),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			hash: true,
			filename: 'about.html',
			//chunks:['about']
			excludeChunks: ['app']
		}),

		new CommonsChunkPlugin({
			name: ['commons', 'vendor','boostrap']
		})
	]
};
