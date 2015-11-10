module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    debug: true,
    watch: true,
    devtool: '#inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: /(app)|(test)/,
            //exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}