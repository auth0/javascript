module.exports = {
  extends: [
    'eslint-config-auth0/legacy',
    'eslint-config-auth0/rules/es6',
  ].map(require.resolve),
  rules: {}
};
