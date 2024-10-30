const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
  mode: "development", 
  entry: "./src/index.js",
  output: {
    filename: "main.js", 
    path: path.resolve(__dirname, "dist"), 
    clean: true, 
  },
  devtool: "eval-source-map", 
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000, 
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: "asset/resource", 
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader", 
          options: {
            presets: ["@babel/preset-env"], 
          },
        },
      },
    ],
  },
};
