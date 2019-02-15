const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './src/browser.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'browser.js'
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};
