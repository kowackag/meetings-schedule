const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
            test: /\.css$/,
        //     // określam jakie pliki 
        //     // będą brane pod uwagę
            exclude: /node_modules/,
        //     // określam wykluczenia
            use: [
                isProd ? CssWebpackPlugin.loader : 'style-loader',  
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isProd ? false : true,
                    // ustawiam identyfikację kodu źródłowego
                },
            },
        ]
        //     // określam jaki [loader]
        //     // ma być wykorzystany
        },
        {
            test: /\.scss$/,
            // określam jakie pliki 
            // będą brane pod uwagę
            // exclude: /node_modules/,
            // określam wykluczenia
            use: [
                isProd ? CssWebpackPlugin.loader : 'style-loader', 
                // 'css-loader', 
                // 'sass-loader',
                { 
                    loader: 'css-loader',
                    options: {
                        sourceMap: isProd ? false : true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isProd ? false : true,
                        sassOptions: {
                            outputStyle: isProd ? 'compressed' : 'expanded'
                        }
                    }
                }
            ]
            // określam jaki [loader]
            // ma być wykorzystany
        },
        {
            test: /\.(ttf|otf|woff|woff2)$/,
            // dodaję rozszerzenia obrazów
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    // ustawiam nazwę katalogu, do którego
                    // będą kopiowane font-y
                }
            }
            // tym razem tylko jeden loader
        },
        ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })
  ]
};