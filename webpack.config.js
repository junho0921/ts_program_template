const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.product.config');

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
