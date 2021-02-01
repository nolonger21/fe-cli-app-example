

# fe-cli-app-example-vue

## fe.config.js
```
Please read the file content notes
```

## vue
@etherfe/cli-plugin-vue

```
.env
APP_1 = 1
APP_2 = 2
APP_3 = 3

.env.development
APP_2 = 2dev
APP_3 = 3dev

.env.production
APP_3 = 3pro

```

yarn build

```js
console.log(process.env.APP_1) // 1
console.log(process.env.APP_2) // 2
console.log(process.env.APP_3) // 3pro
```


## eslint

```
@etherfe/cli-plugin-eslint  
@etherfe/eslint-plugin  
eslint  
```

.eslintrc.js

```js
module.exports = {
  root: true,
  extends: ['plugin:@etherfe/vue', 'plugin:@etherfe/prettier-vue'],
  rules: {},
}

```

### prettier

```
prettier
```

.prettierrc.js

```js
// Need to be consistent with ESLint -> plugin:@etherfe/prettier-vue
// The editor 'Prettier' plugin is used

module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: "es5",
  bracketSpacing: true
}
```
### stylelint

```
@etherfe/cli-plugin-stylelint  
@etherfe/stylelint-config
stylelint  
```

.stylelintrc.js
```js
module.exports = {
  extends: [
    "@etherfe/stylelint-config",
  ],
  rules: {}
}

```

eslint/prettier/stylelint
```
Recommended use the editor plugin
```