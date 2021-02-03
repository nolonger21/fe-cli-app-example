

# fe-cli-app-example

## @etherfe/cli-service

```json
{
    "serve": "fe-cli-service serve",
    "build": "fe-cli-service build",
    "inspect": "fe-cli-service inspect"
}
```

based on Vue CLI service remake
https://github.com/vuejs/vue-cli

#### Why write this CLI service

Research learning, simplified configuration, decoupled plug-ins, React support, etc

#### ⚠ Differences from the Vue CLI

- Webpack upgraded to 5
- less/sass/stylus loader built-in
- The Babel Plugin has built-in generic configuration
- Packaging the ESLint/styelint configuration to simplify configuration
- The built-in Vue is extracted as a plug-in "@etherfe/cli-plugin-vue"
- Add Vue3 plugin "@etherfe/cli-plugin-vue3"
- Add React plugin "@etherfe/cli-plugin-react"
- Add Eslint version of the typescript "@etherfe/cli-plugin-eslint-typescript"
- Add Stylelint plugin "@etherfe/cli-plugin-eslint-stylelint"
- Optimize the plugin "@etherfe/cli-plugin-typescript"
- The environment file variable starts with "APP_"
- Added plugin run check prompt function
- Keep Webpack Configuration habits and use Plugin Configuration Decoupling
- Plug-in configuration has both global and local configuration capabilities

#### Vue cli options changes
https://cli.vuejs.org/zh/config/
```js
{
  ...
  lintOnSave: 'default',
  // Move to "global.eslintOptions.fix" or "@etherfe/cli-plugin-react.fix" of feConfig
  publicPath: '/',
  // please use "webpack.output.publicPath"
  outputDir: 'dist',
  // please use "webpack.output.path"
  indexPath: 'index.html',
  // removed
  pages: undefined,
  // please use "webpack.entry"
  // entry: {
  //   pageA: './src/app.js',
  //   pageB: './src/adminApp.js'
  // }
  devServer: {},
  // please use "webpack.devServer"
  ...
}
```

#### fe.config.js/webpack.config.js

```js
module.exports = ({ feConfig, chainWebpack } = {}) => {
  // plugin configuration items
  feConfig(config => {
    // Prints configurable items for the current plug-in
    // console.log(config)
    return {
      // global: {
      //   test: true, // Shared by all plug-ins
      //   // https://cli.vuejs.org/zh/config/
      //   assetsDir: '',
      //   filenameHashing: true,
      //   runtimeCompiler: false,
      //   transpileDependencies: [],
      //   productionSourceMap: true,
      //   parallel: true,
      //   crossorigin: undefined,
      //   integrity: false,
      //   css: {
      //     extract: true,
      //     modules: false,
      //     sourceMap: false,
      //     loaderOptions: {}
      //   },
      // },
      // 'local:fe-cli-plugin-test': { // !important
      //   test: true,
      // }
    }
  })

  // modify plug-ins chainConfig
  chainWebpack(chain => {
    // console.log(chain.toConfig())
  })

  // webpack raw config
  return {
    // mode: 'development',
    // entry: {
    //   app: 'src/main.js',
    // },
    // output: {
    //   path: 'dist',
    //   publicPath: '/',
    // },
    // externals: {
    //   // npm module mapping cdn variable
    // },
    // module: {},
    // plugins: [],
    // devServer: {
    //   /*
    //     open: false,
    //     host: '0.0.0.0',
    //     port: 8080,
    //     https: false,
    //     hotOnly: false,
    //     proxy: null, // string | Object
    //     before: app => {}
    //   */
    // }
  }
}

module.exports.skipPlugins = [
  // 'local:fe-cli-plugin-test'
]

```

#### Environment file

```js
// .env
APP_1 = 1
APP_2 = 2
APP_3 = 3

// .env.development
APP_2 = 2dev
APP_3 = 3dev

// .env.production
APP_3 = 3pro

```

yarn build

```js
console.log(process.env.APP_1) // 1
console.log(process.env.APP_2) // 2
console.log(process.env.APP_3) // 3pro
```