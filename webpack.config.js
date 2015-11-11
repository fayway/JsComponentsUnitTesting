module.exports = {
    entry: './app/main.js',
    output: {
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
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
}