const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// @ts-check
/** @type { import('webpack').Configuration } */
module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        // enabledLibraryTypes: true,
        library: {
            type: "umd",
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        plugins: [new TsconfigPathsPlugin()]
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
                include: /src/
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.stories.(ts|tsx)?$/,
                exclude: () => true
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
}