import webpack from 'webpack';
import merge from 'webpack-merge';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import common from './webpack.common.babel.js';

const config = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'js/[name].min.js'
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
		new ExtractTextPlugin('css/[name].min.css'),
		new ImageminPlugin({ test: 'assets/**' }),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: { collapseWhitespace: true }
		}),
		new UglifyJsPlugin({
			sourceMap: true,
			uglifyOptions: {
				output: {
					comments: false
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});

export default config;
