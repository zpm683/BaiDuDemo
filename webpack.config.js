module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: { // 内蔵サーバ設定
        contentBase: "./public", 
        historyApiFallback: true,
        inline: true,
        // host: 'xx.xx.xx.xx'
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ["env","react"]
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}
