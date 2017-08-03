const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const cssDevConfig = ['style-loader', 'css-loader', {
	loader: 'postcss-loader',
	options: {
		plugins: () => ([
			require('autoprefixer'),
			require('precss'),
		]),
	},
}];
const cssProductionConfig = ExtractTextPlugin.extract({
	use: ['style-loader', 'css-loader', {
		loader: 'postcss-loader',
		options: {
			plugins: () => ([
				require('autoprefixer'),
				require('precss'),
			]),
		},
	}],
	publicPath: '/dist',
});

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			assets: path.resolve('public'),
			components: path.resolve('src/components'),
			general: path.resolve('src/general'),
			layouts: path.resolve('src/layouts'),
			routes: path.resolve('src/routes'),
			styles: path.resolve('src/styles'),
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{loader: 'css-loader', options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1,
							localIdentName: "[name]--[local]--[hash:base64:8]"}
						},
						{
							loader: "postcss-loader",
							options: {
								modules: true,
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.scss$/,
				use: [{
						loader: "style-loader" // creates style nodes from JS strings
				}, {
						loader: "css-loader" // translates CSS into CommonJS
				}, {
						loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.(jsx|js)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					'file-loader?name=images/[name].[ext]',
					'image-webpack-loader',
				],
			},
		],
	},
	cache : true,
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'errors-only',
		hot: true,
		open: false,
		port: 4000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Demo',
			minify: {
				collapseWhitespace: isProduction,
			},
			hash: false,
			template: './src/index.html',
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: !isProduction,
			allChunks: true,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],
};
