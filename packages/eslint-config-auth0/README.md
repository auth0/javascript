# eslint-config-auth0

[![npm version](https://badge.fury.io/js/eslint-config-auth0.svg)](http://badge.fury.io/js/eslint-config-auth0)

This package provides Auth0's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-auth0

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-auth0;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-auth0 eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "auth0"` to your .eslintrc

### eslint-config-auth0/base

This entry point is deprecated. See [eslint-config-auth0-base](https://npmjs.com/eslint-config-auth0-base).

### eslint-config-auth0/legacy

This entry point is deprecated. See [eslint-config-auth0-base](https://npmjs.com/eslint-config-auth0-base).

See [Auth0's Javascript styleguide](https://github.com/auth0/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
