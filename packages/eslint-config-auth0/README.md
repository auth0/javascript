# eslint-config-auth0

[![npm version](https://badge.fury.io/js/eslint-config-auth0.svg)](http://badge.fury.io/js/eslint-config-auth0)

This package provides Auth0's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-auth0

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-auth0 eslint-plugin-react eslint`
2. add `"extends": "auth0"` to your .eslintrc

### eslint-config-auth0/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-auth0 eslint`
2. add `"extends": "auth0/base"` to your .eslintrc

### eslint-config-auth0/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-auth0 eslint`
2. add `"extends": "auth0/legacy"` to your .eslintrc

See [Auth0's Javascript styleguide](https://github.com/auth0/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
