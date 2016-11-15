var webpack= require('webpack');

module.exports={
  entry:[
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jquery':'jQuery'
    })
  ],
  resolve:{
    root:__dirname,
    alias:{
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      applicationStyles:'app/styles/app.scss'
    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        test:/\.jsx?$/,
        exclude:/(node_modules | bower_components)/
      },
      {
        test:/\.scss$/,
        loader:'style!css!sass'
      }
    ]
  }
}
