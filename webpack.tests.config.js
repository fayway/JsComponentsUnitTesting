module.exports = {
    entry: 'mocha!./tests/index.js',
    output: {
        filename: 'test.build.js',
        path: 'tests/',
        publicPath: 'http://localhost:8888/tests'
    },
    debug: true,
    devtool: '#inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: /(app)|(test)/,
            //exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        port: 8888
    }
};