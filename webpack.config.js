const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [
			path.join(__dirname, 'src'),
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new ESLintPlugin({
			context: path.resolve(__dirname),
			files: 'src/**/*.ts',
			extensions: "ts",
		})
	],
	devtool: 'inline-source-map',
};
