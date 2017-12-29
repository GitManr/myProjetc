const path = require('path');

const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';
const debug = env !== 'production'
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack_conf = {
    name: 'client',
    target: 'web',
    // devtool: debug ? 'cheap-module-source-map' : '',

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.join(__dirname, './src'),
            'node_modules'
        ]
    },
    module: {},
};

webpack_conf.entry = ['babel-polyfill','./src/index.js'];//babel-polyfill 据说用于兼容浏览器;
webpack_conf.output = {
    path: path.join(__dirname, 'dist'),//输出的文件的路径，__dirname node相对运行命令的决定路径
    publicPath: '/',
    filename: 'js/[hash]bundle.js',
    // chunkFilename: debug? '[name].js':'[name].[chunkhash].js',
};

webpack_conf.module.rules = [
    {
        test:/\.js$/,
        exclude: /node_modules/,
        include: [
            path.resolve(__dirname, "src")//定义只解析SRC下的js文件
        ],
        use:{
          loader:'babel-loader',
          options:{
            presets:['env'],//新版本的babel，支持解析ES6、ES7、ES8语法
            plugins:['transform-runtime'],//对一些公共使用的方法模块建立一个独立模块引用，从而避免的重复引用，一定成都加快的打包速度
          }
        }
    },
    {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
    }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['url-loader?limit=10000&name=images/[md5:hash:base64:10].[ext]']
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }
];

webpack_conf.plugins = [
    // new webpack.DefinePlugin({
    //     "process.env":{
    //         NODE_ENV:JSON.stringify(env)
    //     }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ['vander', 'manifest'],
    //     minChunks: Infinity
    // }),
    new CleanWebpackPlugin(['dist'], {
        verbose: true,
        dry: false
    }),

    new HtmlWebpackPlugin({
        template: path.join(__dirname + `/public/index.html`),
        hash: false,
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,//去掉空格
            removeComments:true,//去掉注释
        }
    }),

];

webpack_conf.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  )

  webpack_conf.devServer={
      contentBase: path.join(__dirname, 'src'),
      port: 8000,
      host: 'localhost',
      historyApiFallback: true,
      inline: true,
      hot: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
  }

module.exports = webpack_conf;
