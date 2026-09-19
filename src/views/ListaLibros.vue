<template>
  <section class="lista-libros">
    <h1>Catálogo de libros</h1>

    <FormularioLibro @agregar-libro="handleAgregarLibro" />

    <div class="filtros">
      <input
        v-model="textoFiltro"
        type="text"
        placeholder="Filtrar por autor..."
      />
      <select v-model="categoriaFiltro">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categoriasDisponibles" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <!-- v-show alterna visibilidad (display:none) sin desmontar el elemento -->
      <span class="contador-filtro" v-show="categoriaFiltro || textoFiltro">
        {{ librosFiltrados.length }} resultado(s)
      </span>
    </div>

    <!-- v-if / v-else: mensaje si no hay libros que mostrar -->
    <p v-if="librosFiltrados.length === 0" class="sin-libros">
      No hay libros disponibles con esos filtros.
    </p>

    <div v-else class="grid-libros">
      <!-- v-for con :key obligatorio para el diffing de Vue -->
      <Libro
        v-for="libro in librosFiltrados"
        :key="libro.id"
        :libro="libro"
        @eliminar="handleEliminarLibro"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Libro from '../components/Libro.vue'
import FormularioLibro from '../components/FormularioLibro.vue'
import { libroStore, agregarLibro, eliminarLibro } from '../store/libros.js'

// Con <script setup>, los componentes importados (Libro, FormularioLibro)
// quedan disponibles en el template automáticamente: no hace falta "components: {}"

const textoFiltro = ref('')
const categoriaFiltro = ref('')

// Acceso reactivo al estado compartido (store)
const libros = computed(() => libroStore.libros)

const categoriasDisponibles = computed(() => {
  return [...new Set(libros.value.map(libro => libro.categoria))]
})

const librosFiltrados = computed(() => {
  return libros.value.filter(libro => {
    const coincideAutor = libro.autor
      .toLowerCase()
      .includes(textoFiltro.value.toLowerCase())
    const coincideCategoria = categoriaFiltro.value
      ? libro.categoria === categoriaFiltro.value
      : true
    return coincideAutor && coincideCategoria
  })
})

function handleAgregarLibro(libro) {
  agregarLibro(libro)
}

function handleEliminarLibro(id) {
  eliminarLibro(id)
}
</script>

<style scoped>
.lista-libros { font-family: sans-serif; }
.lista-libros h1 { font-family: 'Georgia', serif; margin-bottom: 1rem; color: var(--tinta); }
.filtros {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.filtros input, .filtros select {
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--linea);
  border-radius: 6px;
}
.filtros input:focus, .filtros select:focus {
  outline: none;
  border-color: var(--acento);
  box-shadow: 0 0 0 2px var(--acento-suave);
}
.contador-filtro { font-size: 0.8rem; color: var(--acento-oscuro); }
.sin-libros { color: var(--texto-suave); font-style: italic; }
.grid-libros { display: flex; flex-direction: column; }
</style>
