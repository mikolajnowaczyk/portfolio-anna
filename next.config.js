// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// const debug = process.env.NODE_ENV !== 'production'

// module.exports = {
//   assetPrefix: !debug ? '/portfolio-anna/' : '',
// }

const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/portfolio-anna/' : ''
const basePrefix = isProd ? '/portfolio-anna' : ''

// const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

const env = {
  CANONICAL_URL: 'https://github.com/mikolajnowaczyk',
  // EMAIL_JS_SERVICE,
  // EMAIL_JS_TEMPLATE,
  // EMAIL_JS_USER,
  // CAPTCHA_SITE_KEY,
  // GTAG,
};

module.exports = withPlugins([
  // [optimizedImages, {
  //   // these are the default values so you don't have to provide them if they are good enough for your use-case.
  //   // but you can overwrite them here with any valid value you want.
  //   inlineImageLimit: 8192,
  //   imagesFolder: 'images',
  //   imagesName: '[name]-[hash].[ext]',
  //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //   removeOriginalExtension: false,
  //   optimizeImages: true,
  //   optimizeImagesInDev: false,
  //   mozjpeg: {
  //     quality: 80,
  //   },
  //   optipng: {
  //     optimizationLevel: 3,
  //   },
  //   pngquant: false,
  //   gifsicle: {
  //     interlaced: true,
  //     optimizationLevel: 3,
  //   },
  //   svgo: {
  //     // enable/disable svgo plugins here
  //   },
  //   webp: {
  //     preset: 'default',
  //     quality: 75,
  //   },
  // }],
  [withImages, {
    assetPrefix: 'https://github.com/mikolajnowaczyk',
    webpack(config, options) {
      return config
    }
  }],
  {
    basePath: basePrefix,
    assetPrefix: assetPrefix,
    env,
  },
]);