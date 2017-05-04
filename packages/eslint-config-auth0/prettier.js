module.exports = {
  extends: [
    './index.js',
    'eslint-config-prettier',
    'eslint-config-prettier/react'
  ].map(require.resolve)
};
