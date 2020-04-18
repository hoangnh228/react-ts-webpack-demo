const path = require('path')
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    }
}