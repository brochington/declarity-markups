const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/static/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader', 'eslint-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.dsx$/,
            use: ['babel-loader', 'declarity-loader'],
            include: path.join(__dirname, 'src/entities')
        }, {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            use: ['file-loader'],
            include: path.join(__dirname, 'src/assets/img')
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
