import merge from 'webpack-merge';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

import common from './webpack.common.babel.js';

const config = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: 'js/[name].js'
	},
	devServer: {
		quiet: true
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:8080/',
				open: false,
				ui: false
			},
			{
				reload: false
			}
		)
	]
});

export default config;
