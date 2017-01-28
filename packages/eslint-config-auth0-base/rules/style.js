module.exports = {
  rules: {
    // disallow dangling underscores in identifiers, but allow `_id`.
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  }
};
