module.exports = process.env.NODE_ENV === 'production'
  ? require('./store.prod')
  : require('./store.dev')