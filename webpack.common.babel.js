import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
	entry: {
		bundle: './src/index.tsx'
	},
	output: {
		path: path.join(__dirname, 'public')
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@util-wrappers': path.resolve(__dirname, 'src/util-wrappers'),
			'@atoms': path.resolve(__dirname, 'src/components/atoms'),
			'@molecules': path.resolve(__dirname, 'src/components/molecules'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@templates': path.resolve(__dirname, 'src/components/templates')
		}
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
				use: { loader: 'source-map-loader' },
				enforce: 'pre'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: { loader: 'awesome-typescript-loader' }
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
