<template>
  <!-- v-bind:class se usa aquí de forma abreviada como :class -->
  <article class="libro-card" :style="{ borderLeftColor: colorCategoria }">
    <div class="libro-info">
      <!-- v-bind:title crea un atributo HTML nativo con el nombre completo -->
      <h3 :title="libro.titulo">{{ libro.titulo }}</h3>
      <p class="libro-autor">{{ libro.autor }}</p>
      <span class="libro-categoria">{{ libro.categoria }}</span>
    </div>

    <div class="libro-acciones">
      <!-- Ruta dinámica: /libros/:id -->
      <RouterLink :to="`/libros/${libro.id}`" class="btn-detalle">Ver detalle</RouterLink>

      <!-- Lección 4: evento @click con modificador .once -->
      <button class="btn-eliminar" @click.once="confirmarEliminar">
        Eliminar
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
// defineProps y defineEmits son macros de compilador: no requieren import.
const props = defineProps({
  libro: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['eliminar'])

const coloresPorCategoria = {
  'Novela': 'var(--novela)',
  'Fantasía': 'var(--fantasia)',
  'Ciencia ficción': 'var(--ciencia-ficcion)',
  'Poesía': 'var(--poesia)',
  'Ensayo': 'var(--ensayo)'
}
const colorCategoria = computed(() => coloresPorCategoria[props.libro.categoria] || 'var(--linea)')

function confirmarEliminar() {
  // El componente hijo no borra el dato directamente:
  // emite el evento y deja que el padre (dueño del estado) decida.
  emit('eliminar', props.libro.id)
}
</script>

<style scoped>
.libro-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--linea);
  border-left: 4px solid var(--linea);
  border-radius: 8px;
  background: var(--panel);
  margin-bottom: 0.8rem;
}
.libro-info h3 { margin: 0 0 0.2rem; font-size: 1.05rem; }
.libro-autor { margin: 0; color: var(--texto-suave); font-size: 0.9rem; font-family: sans-serif; }
.libro-categoria {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  font-family: sans-serif;
  color: var(--acento-oscuro);
  background: var(--acento-suave);
  border: 1px solid var(--linea);
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
}
.libro-acciones { display: flex; gap: 0.5rem; flex-shrink: 0; }
.btn-detalle, .btn-eliminar {
  font-family: sans-serif;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid var(--linea);
}
.btn-detalle { background: var(--acento); color: #fff; border-color: var(--acento); }
.btn-detalle:hover { background: var(--acento-oscuro); }
.btn-eliminar { background: #fff; color: #ff496d; }
.btn-eliminar:hover { background: #fef2f2; border-color: #EC6984; color: #EC6984; }
</style>
