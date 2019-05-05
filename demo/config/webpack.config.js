const path = require("path") // node 自带的
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash].js',
        publicPath: 'static',
    },
    devServer: {
        host: 'localhost',
        port: '8200',
        overlay: true,
        open: true,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
            },{
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images'
                        }
                    }
                ]
            },{
                test: /\.(less|scss)/,
                use: ['style-loader', 'less-loader','sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
            },{
                test: /\.(js|vue)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            preset: ['@babel/preser-env']
                        },
                        plugins: [
                            [require("@babel/plugin-proposal-decorators"),{"legacy":true}]
                        ]
                    }
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            minify: true,
            publicPath: 'static'
        })
    ]
}