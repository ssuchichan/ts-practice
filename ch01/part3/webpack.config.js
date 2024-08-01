const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // 入口文件
  entry:"./src/index.ts",
  // 打包文件目录
  output: {
    // 目录
    path: path.resolve(__dirname,'dist'),
    // 打包后文件名
    filename: "bundle.js",
    environment: {
      // 不使用箭头函数
      arrowFunction: false
    }
  },
  // 打包时要使用的模块
  module: {
    rules: [{
      // 规则生效的文件
      test: /\.ts$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  "ie": "11",
                },
                "corejs": "3",
                "useBuiltIns": "usage",
              }
            ]
          ]
        }
      },
        'ts-loader'
      ],
      exclude: /node_modules/,
    }]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        //title: "ThisApp"
        template: "./src/index.html",
      })
  ],
  // 设置引用模块
  resolve: {
    extensions: ['.ts','.js'],
  }
};


