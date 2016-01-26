module.exports = {
  extends: [
    'eslint-config-auth0/rules/best-practices',
    'eslint-config-auth0/rules/errors',
    'eslint-config-auth0/rules/legacy',
    'eslint-config-auth0/rules/node',
    'eslint-config-auth0/rules/style',
    'eslint-config-auth0/rules/variables'
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
  rules: {}
};
