## `.eslintrc`

Our `.eslintrc` requires the following NPM packages:

```
npm install --save-dev \
  eslint-config-auth0 \
  eslint \
  babel-eslint \
  eslint-plugin-react
```

## `.jscsrc`

Our `.jscsrc` requires the following NPM packages:

```
npm install --save-dev jscs
```

### For sublime users
Install package https://github.com/SublimeLinter/SublimeLinter-jscs
![jscs-linter](https://cloud.githubusercontent.com/assets/1288192/12572532/7e2d247c-c3cc-11e5-9765-7273b4578525.gif)


### For atom users
Install package https://atom.io/packages/linter-jscs
![jscs-linter-atom](https://cloud.githubusercontent.com/assets/1288192/12572538/8847401e-c3cc-11e5-857d-a719349fa663.gif)


### For command line users
Run:
```
npm install -g jscs
```
and then
```
jscs <path-to-your-file-or-folder>
```
