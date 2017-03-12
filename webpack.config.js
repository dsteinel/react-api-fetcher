var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/main.js",
	module: {
		loaders: [
		{
			enforce: "pre",
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
			}
		},
		{
			test: /\.scss$/,
			loaders: [
				'style-loader',
				'css-loader',
				'postcss-loader?sourceMap=inline',
				'sass-loader'
			]
		}
		]
	},
	output: {
		path: __dirname + "/src/",
		filename: "main.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false,
		})
	]
};
