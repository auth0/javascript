module.exports = {
  extends: [
    'eslint-config-auth0/base',
    'eslint-config-auth0/rules/strict',
    'eslint-config-auth0/rules/react',
  ].map(require.resolve),
  rules: {}
};
