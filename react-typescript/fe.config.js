module.exports = ({ feConfig, chainWebpack } = {}) => {
  // plugin configuration items
  feConfig((config) => {
    // Prints configurable items for the current plug-in
    // console.log(config)
    return {
      global: {
        // assetsDir: '',
        // filenameHashing: true,
        // transpileDependencies: [],
        // productionSourceMap: true,
        // parallel: true,
        // crossorigin: undefined,
        // integrity: false,
        // css: {
        //   extract: true,
        //   modules: false,
        //   sourceMap: false,
        //   loaderOptions: {},
        // },
        eslintOptions: {
          // formatter: 'codeframe', // default 'stylish'
          fix: true, // save auto fix. recommended editor plug-in eslint/prettier
        },
        stylelintOptions: {
          fix: true, // save auto fix. recommended editor plug-in stylelint
        },
        forkTsChecker: true,
      },
      // 'local:fe-cli-plugin-test': {
      //   // !important
      //   test: true,
      // },
      // '@etherfe/cli-plugin-typescript': {
      //   forkTsChecker: true,
      // },
    }
  })

  // modify plug-ins chainConfig
  chainWebpack((chain) => {
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
