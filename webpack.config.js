const path = require('path');
const htmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
  entry:['babel-polyfill','./src/index.js'],//babel-polyfill 据说用于兼容浏览器
  output:{
    path:path.resolve(__dirname, "./dist"),//输出的文件的路径，__dirname node相对运行命令的决定路径
    filename:'js/bundle.js',
    // publicPath:'http://baidu.cn/'//如果要上线地址，给js加的前缀
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        include:path.resolve(__dirname,'src'),//定义只解析SRC下的js文件
        exclude:path.resolve(__dirname,'node_modules'),//用node Api方法取路径地址
        use:{
          loader:'babel-loader',
          options:{
            presets:['react','env'],//新版本的babel，支持解析ES6、ES7、ES8语法
            plugins:['transform-runtime'],//对一些公共使用的方法模块建立一个独立模块引用，从而避免的重复引用，一定成都加快的打包速度
          }
        }
      },{
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader","postcss-loader"]
      },{
        test: /\.(png|jpg|gif|md)$/,
        use: ['url-loader?limit=10000&name=images/[md5:hash:base64:10].[ext]']
      },{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=image/svg+xml']
      }
    ],
  },
  // plugins:[new htmlWebpackPlugin({
  //   template:'index.html',
  //   title:'webpack is good',
  //   data: new Date(),
  //   minify:{
  //     removeComments:true,//去掉注释
  //     // collapseWhitespace:true,//去掉空格
  //   },
  //   // chunks:['main'],//仅加载哪些js模块
  // })
// ]
}
