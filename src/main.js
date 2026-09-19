// main.js
// -----------------------------------------------------------------
// Punto de entrada de la aplicación. Crea la instancia raíz de Vue,
// le conecta el router y la monta en el <div id="app"> de index.html
// -----------------------------------------------------------------
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
