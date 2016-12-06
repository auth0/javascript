module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/errors',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {
    'comma-dangle': ['error', 'never']
  }
}
