<template>
  <div class="app">
    <header class="app-header">
      <div class="marca">
        <span class="marca-texto">BookList</span>
      </div>

      <nav class="app-nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/libros">Catálogo</RouterLink>
      </nav>

      <!-- Lección 1: datos reactivos + método + patrón MVVM -->
      <div class="visitas">
        <span>Hola, {{ nombreUsuario }} · Visitas: {{ contador }}</span>
        <button @click="incrementar">+1</button>
      </div>
    </header>

    <main class="app-main">
      <!-- RouterView renderiza la vista activa según la ruta -->
      <RouterView />
    </main>

    <footer class="app-footer">
      Editorial Nova · Booklist
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// "ref" crea el dato reactivo (Modelo). La plantilla (Vista) se
// actualiza sola cuando cambia su valor: esto es el patrón MVVM.
const nombreUsuario = ref('Francisco')
const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>

<style>
:root {
  --tinta: #12213a;
  --papel: #ffffff;
  --panel: #ffffff;
  --acento: #2563eb;
  --acento-oscuro: #1d4ed8;
  --acento-suave: #dbeafe;
  --linea: #bfdbfe;
  --texto-suave: #4b6a95;
  --novela: #eb8125;
  --fantasia: #9feb25;
  --ciencia-ficcion: #ebd425;
  --poesia: #eb25de;
  --ensayo: #25caeb; 
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Georgia', 'Times New Roman', serif;
  background: var(--papel);
  color: var(--tinta);
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 2rem;
  background: var(--acento);
}

.marca { font-size: 1.4rem; display: flex; align-items: center; gap: 0.5rem; color: #fff; }
.marca em { font-style: italic; color: #fff; }

.app-nav { display: flex; gap: 1.2rem; }
.app-nav a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  font-family: sans-serif;
  font-size: 0.95rem;
}
.app-nav a.router-link-exact-active {
  border-bottom-color: #fff;
  color: #fff;
}

.visitas {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
}
.visitas button {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: transparent;
  color: #fff;
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
}
.visitas button:hover { background: rgba(255, 255, 255, 0.15); }

.app-main { padding: 2rem; max-width: 900px; margin: 0 auto; }

.app-footer {
  text-align: center;
  padding: 1.2rem;
  font-family: sans-serif;
  font-size: 0.8rem;
  color: var(--texto-suave);
  border-top: 1px solid var(--linea);
}
</style>
