const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env, argv) {
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode
    const isEnvProduction = argv.mode === 'production' 
    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheep-module-source-map',

        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: '/dist'
        },
        module: {
            rules: [
                { 
                    test: /\.js$/, use: 'babel-loader' 
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: "pre",
                    use: "eslint-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(wofflwoff2leotlttflotf)$/,
                    use: ["file-loader"]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            ]
        },
        plugins: [
            // new webpack.HotModuleReplacementPlugin()
            new HtmlWebpackPlugin({
                template: "public/index.html"
            })
        ],
        devServer: {
            contentBase: './dist',
            port: 8088,
            inline: true,
            hot: true,
            // hotOnly: true,
            open: true
        }
    }
}

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/dist'
//     },
//     module: {
//         rules: [
//             {test: /\.js$/, use: 'babel-loader'}
//         ]
//     },
//     plugins: [

//         new webpack.HotModuleReplacementPlugin()

//     ],
//     devServer: {
//         // contentBase: path.resolve(__dirname, './'),
//         port: 8088,
//         inline: true,
//         hot: true,
//         hotOnly: true,
//         open: true
//     }
// }