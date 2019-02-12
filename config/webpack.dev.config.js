const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const port = 7777;
let dev = {
    entry: {
        'index': path.resolve(__dirname, '../static/index'),
    },
    devtool: 'inline-source-map',
    devServer: {
        public: `localhost:${port}`,
        openPage: 'index.html',
        port,
        overlay: true,
    },
    output: {
        filename: '[name].js'
    },
    mode: 'development',
};

module.exports = merge(base, dev);
