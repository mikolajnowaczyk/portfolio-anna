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

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/cennik': { page: '/cennik' },
    '/kontakt': { page: '/kontakt' },
    // '/page1': { page: '/page1' },
  }),
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
})