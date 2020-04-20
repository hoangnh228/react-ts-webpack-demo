const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rules = [
    {
        test: /\.tsx?/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
    },
    {
        test: /\.css?/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.jpe?g?|\.gif?|\.png?|\.svg?|\.woff?|\.woff2?|\.eot?|\.ttf?|\.wav?|\.mp3?|\.ico?/,
        loader: 'file-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js']},
    devServer: {
        contentBase: './src',
        port: 5000
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}