import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
	entry: {
		bundle: './src/app.js'
	},
	output: {
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: { loader: 'html-loader' }
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'sass-loader',
							options: { sourceMap: true }
						},
						{ loader: 'postcss-loader' }
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: {
					loader:
						'file-loader?publicPath=../&name=assets/img/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: {
					loader:
						'file-loader?publicPath=../&name=assets/fonts/[name].[ext]'
				}
			}
		]
	}
};

export default config;
