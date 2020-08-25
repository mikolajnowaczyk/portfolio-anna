const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/portfolio-anna/' : ''
const basePrefix = isProd ? '/portfolio-anna/' : ''

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const env = {
  CANONICAL_URL: 'https://github.com/mikolajnowaczyk',
};

module.exports = withPlugins([
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