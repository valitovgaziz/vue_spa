const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new (require('webpack').DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'comp': path.resolve(__dirname, 'src/components'),
        'views': path.resolve(__dirname, 'src/views'),
        'langs': path.resolve(__dirname, 'src/locales/i18n_json_files'),
      },
    },
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'yalarba'; // Устанавливаем заголовок
      return args;
    });
  },
})
