const TerserPlugin = require('terser-webpack-plugin');

const vueConfig = {
  configureWebpack: {
    plugins: [],
  },

  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8000,
    https: false,
    disableHostCheck: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Lamp';
      return args;
    });

    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').use(TerserPlugin, [
        {
          extractComments: true,
          parallel: true,
          sourceMap: false,
          terserOptions: {
            extractComments: 'all',
            compress: {
              drop_console: true,
            },
          },
        },
      ]);
    }
  },
};

module.exports = vueConfig;
