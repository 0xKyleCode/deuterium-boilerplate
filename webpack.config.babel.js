// @flow
import path from 'path'
import fs from 'fs'
import { WDS_PORT, IN_PROD_ENV } from '@deuterium/env'
import { appRoot } from '@deuterium/util'
import webpack from 'webpack'

export default {
    entry: ['./src/_client'],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: IN_PROD_ENV
            ? '/static/'
            : `https://localhost:${WDS_PORT}/dist/`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: IN_PROD_ENV ? false : 'source-map',
    mode: IN_PROD_ENV ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        https: {
            key: fs.readFileSync(`${appRoot}/server.key`),
            cert: fs.readFileSync(`${appRoot}/server.crt`),
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}
