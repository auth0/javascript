# eslint-config-auth0

[![npm version](https://badge.fury.io/js/eslint-config-auth0.svg)](http://badge.fury.io/js/eslint-config-auth0)

This package provides Auth0's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-auth0

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [eslint-config-auth0-base](https://npmjs.com/eslint-config-auth0-base).

If you use yarn, run `npm info "eslint-config-auth0@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-auth0@latest" peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-auth0;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-auth0 eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "auth0"` to your .eslintrc
  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-auth0
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-auth0 eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "auth0"` to your .eslintrc

### eslint-config-auth0/prettier

Same of `eslint-config-auth0` but turns off all rules that are unnecessary or might conflict with prettier.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-auth0@latest" peerDependencies
  ```

  Linux/OSX users can run
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

2. Add `"extends": "auth0/prettier"` to your .eslintrc

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
