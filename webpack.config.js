var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var productionConfig = {
    entry: path.resolve(__dirname, './public/js/index.js'),
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
            // other ng-annotate options here
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [

            {test: /\.js$/, loader:'babel-loader', exclude:'./~/node_modules'},
            {test: /\.html$/, loader:'raw', exclude:'./~/node_modules'}
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'public/node_modules')
    }
};

var config = {
    entry: path.resolve(__dirname, './public/js/index.js'),
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV==="test"
        })
    ],
    module: {
        loaders: [

            {test: /\.js$/, loader:'babel-loader', exclude:'./~/node_modules'},
            {test: /\.html$/, loader:'raw', exclude:'./~/node_modules'}
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'public/node_modules')
    }
};

if (process.env.NODE_ENV==="test")
{
    module.exports = config;
}
else
{
    module.exports = productionConfig;
}
