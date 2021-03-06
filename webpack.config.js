var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app1/index.html',
    filename: 'index.html',
    inject: 'head'
});

module.exports = {
    entry: __dirname + '/app1/index.js',
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig],
};