const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './Client/index.jsx'), // Assuming entry point is index.jsx

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), // Ensure this is the correct path to your HTML template
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: './Client/assets', to: 'assets' }
            ]
        }),
    ],

    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:5050',
                changeOrigin: true,
                secure: false,
            }
        ],
    },
    performance: { // this skips the warnings for example file size loaded
        hints: false,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                // Existing CSS loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            
            
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
