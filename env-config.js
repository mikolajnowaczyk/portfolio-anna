// const prod = process.env.NODE_ENV === 'production'

// module.exports = {
//   'process.env.BACKEND_URL': prod ? '/portfolio-anna' : ''
// }

// const pathPrefix = process.env.NODE_ENV === 'production'
//   ? '/portfolio-anna'
//   : '';

// module.exports = {
//   assetPrefix: pathPrefix,
//   env: {
//     pathPrefix,
//   },
// };

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/Next-gh-page-example' : '',
}