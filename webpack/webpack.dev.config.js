const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const config = merge.smart(
  baseConfig({ env: 'development' })
);

module.exports = config;