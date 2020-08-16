// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// const debug = process.env.NODE_ENV !== 'production'

// module.exports = {
//   assetPrefix: !debug ? '/portfolio-anna/' : '',
// }

const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/portfolio-anna' : ''

const withCSS = require('@zeit/next-css')

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
  }],
  {
    assetPrefix: assetPrefix,
    basePath: assetPrefix,
    webpack: config => {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      )
      return config
    },
  }
])

// withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   assetPrefix: assetPrefix,
//   basePath: assetPrefix,
//   webpack: config => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
//       }),
//     )
//     return config
//   },
// })