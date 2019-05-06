const path = require("path") // node 自带的
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash].js',
        publicPath: '',
    },
    devServer: {
        host: 'localhost',
        port: '8200',
        overlay: true,
        open: true,
        stats: "errors-only"
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
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
                test: /\.(less|scss)$/,
                use: ['style-loader','css-loader', 'less-loader','sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
            },{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "babelrc": false,
                        "plugins": [
                            "dynamic-import-webpack"
                        ]
                    }
                }],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
            },{
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            minify: true,
            // publicPath: 'static'
        }),
        new VueLoaderPlugin()
    ]
}