const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = require("../config");
const tools = require("../config/tools");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appEnv = tools.filterAppEnv(env);
const HappyPack = require("happypack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    publicPath: "./",
                                    name: 'images/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                // use: {
                //     loader: "babel-loader?cacheDirectory=true"
                // },
                use: "happypack/loader?id=happyBabel"
            },
            {
                test: /\.(eot|ttf|woff|woff2)\w*/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    publicPath: "./",
                                    name: 'font/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".vue"]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            appGlobal: appEnv
        }),
        new CopyWebpackPlugin([
            {
                from: "static/*"
            }
        ]),
        new HappyPack({
            id: "happyBabel",
            loaders: [{
                loader: "babel-loader?cacheDirectory=true"
            }]
        })
    ]
};