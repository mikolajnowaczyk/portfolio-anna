const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/portfolio-anna' : ''
const basePrefix = isProd ? '/portfolio-anna' : ''

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const env = {
  CANONICAL_URL: 'https://github.com/mikolajnowaczyk',
};

module.exports = withPlugins([
  [withImages, {
    assetPrefix: 'https://github.com/mikolajnowaczyk/',
    webpack(config) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      )
      return config
    }
  }],
  {
    basePath: basePrefix,
    assetPrefix: assetPrefix,
    exportTrailingSlash: true,
    env,
  },
]);