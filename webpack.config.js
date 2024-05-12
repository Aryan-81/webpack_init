const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Add React preset
                    },
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 2500,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WEB_APP',
            filename: 'index.html',
            template: './src/templet.html',
        }),
        new BundleAnalyzerPlugin(),
    ],
};
