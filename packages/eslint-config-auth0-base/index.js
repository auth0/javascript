module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/errors',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    strict: 'error'
  }
};
