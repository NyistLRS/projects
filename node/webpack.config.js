const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin") // html模板插件
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        conetntBase: './',
        port: '8989',
        host: 'localhost'
    },
    module: {
        rules: [ // 加载css文件
            {
                test: /\.css/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },{ // 加载图片
                test: /\.(gif|jpg|png|bmp|eot|woff|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images'
                        }
                    }
                ]
            },{ // 支持less文件的编译
                test: /\.less/,
                use: ['style-loader','css-loader','less-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },{ // 支持scss文件的编译
                test: /\.scss/,
                use: ['style-loader','css-loader','sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },{ // babel编译
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        preset: ['@babel/preset-env', '@babel/react'],
                        plugin: [
                            [require("@babel/plugin-proposal-decorators"),{"legacy" : true}]
                        ]
                    }
                }],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    optimization: {
        minimizer: {
            new UglifyWebpackPlugin({
                parallel: 4
            })
        }
    },
    pulgin: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}