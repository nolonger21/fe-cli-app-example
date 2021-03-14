

# react-typescript-eslint

## fe.config.js
```
Please read the file content notes
```

## react
@etherfe/cli-plugin-react

## typescript
```
typescript  

@types/node  
@types/react  
@types/react-dom  
```

tsconfig.json



```json
 // see file
```
## eslint

```
@etherfe/cli-plugin-eslint  
@etherfe/cli-plugin-eslint-typescript  
@etherfe/eslint-plugin  
eslint  
```


.eslintrc.js

```js
module.exports = {
  root: true,
  extends: [
    'plugin:@etherfe/react-typescript',
    'plugin:@etherfe/prettier-react',
    'plugin:@etherfe/prettier-typescript',
  ],
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