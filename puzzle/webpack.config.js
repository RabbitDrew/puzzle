const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssLoader = process.env.NODE_ENV === "development" ? "style-loader": MiniCssExtractPlugin.loader; // separate css file in prod mode
module.exports = {
   mode: process.env.NODE_ENV === "production" ? "production" : "development",// 
   devtool: 'source-map',
   entry: "./src/index.js",
   output: {
     filename: "bundle.[contenthash].js",
     path: path.resolve(__dirname, "./dist"),
     clean: true
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src","index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    })
  ],
   module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [cssLoader, "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".css", ".ts"] // for regnition of css in js 
  },
};

//npm install concurrently --save-dev cuncurently for watchink code for example watch ts and bundle