module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/errors',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    strict: 'error'
  }
}
