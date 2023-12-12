const { defineConfig } = require('@vue/cli-service')
const path = require("path");


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: path.resolve(__dirname, '../erish/public/'),
  devServer: {
    allowedHosts: [
      'charaoke.kro.kr'
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',  
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})
