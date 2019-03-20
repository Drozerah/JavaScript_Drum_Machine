const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// using Hash ? 
const useHash = false
module.exports = {
    // mode: 'production', // https://webpack.js.org/concepts/mode/
    entry: {
        main: './src/index.js'
    },
    devServer: { 
        //open: true, // https://webpack.js.org/configuration/dev-server#devserveropen
        overlay: true, // https://webpack.js.org/configuration/dev-server#devserveroverlay
        //port:8000
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader" // https://webpack.js.org/loaders/babel-loader
                }
            },
            {
                test: /\.html$/, // regex: any files endings with .html extension
                use: [
                    {
                        loader: "html-loader", // https://webpack.js.org/loaders/html-loader/
                        options: {
                            minimize: false,
                            removeComments: false, // remove comments only if minimize option is set to 'true'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader" // https://webpack.js.org/loaders/file-loader
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [ // https://webpack.js.org/loaders/style-loader
                    //"style-loader", // creates style nodes from JS strings
                    MiniCssExtractPlugin.loader, // extract the style sheets into a dedicated file for production
                    "css-loader", // translates CSS into CommonJS
                    "postcss-loader", // Then we apply postCSS fixes like autoprefixer and minifying
                    "sass-loader", // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "./index.html" // output to the distribution folder
        }),
        new MiniCssExtractPlugin({
            //filename: useHash ? "./css/[name].[hash:4].css" : "./css/[name].css",

            filename: "./css/[name].css", // ./css folder + default name 
            // filename: "[name].css", // default name
            // filename: "[name].[hash:4].css", // default name + hash
            // filename: "MyName.css", // custom name
            // filename: "MyName.[hash:4].css", // custom name + hash
            chunkFilename: "[id].css"
        }),
    ]
}