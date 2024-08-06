const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const webpack = require('webpack')

module.exports = {
    mode : 'development',
    devServer: {
        port: 8081,
        hot: true,  // Enable hot module replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes:{
                './ProductsIndex': './src/index.js'
            },
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}