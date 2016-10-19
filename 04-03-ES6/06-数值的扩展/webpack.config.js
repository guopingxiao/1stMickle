/**
 * Created by zhanglongde on 2016/9/4.
 */

var path = require('path');
module.exports = {
    entry: "./8-指数运算符/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}