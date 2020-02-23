const merge = require('webpack-merge');
const TerserPlugin = require ('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = () => {
  return {
    optimization: {
      minimizer: [new TerserPlugin()]
    }
  }
};

const config = merge.smart(
  baseConfig({ env: 'production' }),
  prodConfig
);

module.exports = config;