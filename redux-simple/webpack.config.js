let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('./webpack.config.loaders')();

loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
    })
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`
    },
    devtool: 'source-map',
    module: {
        loaders
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                drop_debugger: false
            }
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'Другофильтр',
            template: 'index.hbs'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
