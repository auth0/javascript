module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/errors',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  rules: {
    strict: 'error'
  }
};
