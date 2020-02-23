const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({env})  => {
 return {
   entry: './src/index',
   module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             envName: env
           }
         }
       }, 
       {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
       },
       {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
       },
       { 
        test: /\.(png|jpg)$/,
        loader: 'url-loader' 
       }
     ]
   },
   plugins: [
     new htmlWebpackPlugin({
       template: './public/index.html',
       filename: './index.html'
     }),
     new copyWebpackPlugin([
      { from: './public/favicon.ico' }
    ]),
   ]
 }
}