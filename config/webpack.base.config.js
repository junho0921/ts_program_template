const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const {CheckerPlugin, TsConfigPathsPlugin} = require("awesome-typescript-loader");

let HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlPlugins = [];
// 页面入口
htmlPlugins.push(new HtmlWebpackPlugin({
    filename: `index.html`,
    template: path.resolve(__dirname, `../static/tpl/index.html`),
    chunks: 'index',
    inject: true,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
    },
    chunksSortMode: 'dependency'
}));

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.html'],
        alias: {
            '@': path.join(__dirname, '../..'),
        },
        plugins: [new TsConfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,  'css-loader']
            },
            {
                test: /.(ttf|otf|gif|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../fonts/'       // override the default path
                    }
                }]
            },
            {
                test: /\.less/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: "1",
                            localIdentName: "[local]_[hash:base64:2]"
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'art-template-loader',
            }, {
                test: /\.jpg$/,
                loader: 'url-loader?mimetype=image/jpg'
            }, {
                test: /\.png$/,
                loader: 'url-loader?mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?mimetype=image/svg+xml'
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `../public/css/[name]-v[hash].min.css`,
            chunkFilename: '[id].css'
        }),
        new OptimizeCSSAssetsPlugin({}),
        ...htmlPlugins,
        new CheckerPlugin()
    ],
};
