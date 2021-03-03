

# react-typescript-tslint

## fe.config.js
```
Please read the file content notes
```

## react
@etherfe/cli-plugin-react

## typescript
```
@etherfe/cli-plugin-typescript

typescript  

@types/node  
@types/react  
@types/react-dom  
```

tsconfig.json


```json
{
  // ...
  "compilerOptions": {
    // ...
    "plugins": [
      {
        "name": "typescript-tslint-plugin" // https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
      }
    ]
  }
}

```
## tslint

```
tslint  
tslint-react  
tslint-react-hooks  
typescript-tslint-plugin  
```

tslint.json


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

tslint/prettier/stylelint
```
Recommended use the editor plugin
```