const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
              test: /\.(jsx|js)?$/,
              exclude: /node_modules/,
              use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                // 'style-loader',
                'css-loader',
              ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'assets/[name].css',
        }),
      ],
      devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
      },


}