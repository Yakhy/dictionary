const path = require('path')
const HTmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    about: path.resolve(__dirname, './src/about.js')
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
 plugins: [
  new HTmlWebpackPlugin({
    title: 'Webpack 5',
    filename: 'index.html',
    template: './src/temp.html',
    chunks: ['app'],
  }),
  new HTmlWebpackPlugin({
    title: 'About',
    filename: 'about.html',
    template: './src/tempAbout.html',
    chunks: ['about'],
  }),
 ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    
  },
}