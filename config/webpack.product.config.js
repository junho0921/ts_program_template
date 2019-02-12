const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let prod = {
    entry: {
        'main': path.resolve(__dirname, '../static/index'),
    },
    plugins: [
        new CleanWebpackPlugin(['public/*'], {
            root: path.resolve(__dirname, '../'),
        }),
        new UglifyJsPlugin({
            test: /.js$|.jsx$/i,
            uglifyOptions: {
                compress: {
                    pure_funcs: ['console.log', 'alert'], // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
                },
            },
        })
    ],
    output: {
        filename: `[name]-v[hash:4].min.js`,
        path: path.resolve(__dirname, '../public'),
    },
    mode: 'production',
};


module.exports = merge(base, prod);
