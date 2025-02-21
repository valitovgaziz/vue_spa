const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new (require('webpack').DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
  },
  transpileDependencies: true
})
