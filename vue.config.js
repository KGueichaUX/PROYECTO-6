const { defineConfig } = require('@vue/cli-service')

// Configuración de Vue CLI para el proyecto BookList Nova
module.exports = defineConfig({
  transpileDependencies: true,

  // Puerto del servidor de desarrollo (npm run serve)
  devServer: {
    port: 8080,
    open: true
  }
})
