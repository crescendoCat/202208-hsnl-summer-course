const fs = require('fs');
const path = require('path');
//搜尋src資料夾底下的所有component，
//並將其index.js設為react編譯的進入點
const componentDir = path.join(__dirname, 'src');
const cModuleNames = fs.readdirSync(componentDir);
const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = path.join(componentDir, name, "index.js");
  return prev;
}, {});
console.log(cModuleMap);

module.exports = (env) => ({
	devtool: env.production ? false: "eval-cheap-module-source-map",
	entry: cModuleMap,
  output: {
      filename: '[name]/index.js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, './assets/'),
  },
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
})