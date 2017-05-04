module.exports = {
  extends: [
    './index.js',
    'eslint-config-prettier'
  ].map(require.resolve)
};
