<template>
  <section class="detalle-libro">
    <RouterLink to="/libros" class="volver">← Volver al catálogo</RouterLink>

    <div v-if="libro">
      <h1>{{ libro.titulo }}</h1>
      <p class="autor">{{ libro.autor }}</p>
      <span class="categoria">{{ libro.categoria }}</span>
      <p class="descripcion">
        {{ libro.descripcion || 'Este libro no tiene descripción registrada.' }}
      </p>

      <button class="btn-eliminar" @click="eliminar">
        Eliminar este libro
      </button>
    </div>

    <p v-else class="no-encontrado">
      No se encontró ningún libro con el id "{{ id }}".
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { obtenerLibroPorId, eliminarLibro } from '../store/libros.js'

// "id" llega como prop gracias a props:true en el router
// (ruta definida como '/libros/:id')
const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const router = useRouter()

const libro = computed(() => obtenerLibroPorId(props.id))

function eliminar() {
  eliminarLibro(libro.value.id)
  router.push('/libros')
}
</script>

<style scoped>
.detalle-libro { font-family: sans-serif; }
.volver {
  display: inline-block;
  margin-bottom: 1.2rem;
  color: var(--acento);
  text-decoration: none;
  font-size: 0.9rem;
}
.volver:hover { color: var(--acento-oscuro); }
.detalle-libro h1 { font-family: 'Georgia', serif; margin-bottom: 0.2rem; color: var(--tinta); }
.autor { color: var(--texto-suave); margin: 0 0 0.4rem; }
.categoria {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--acento-oscuro);
  background: var(--acento-suave);
  border: 1px solid var(--linea);
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
  margin-bottom: 1rem;
}
.descripcion { line-height: 1.6; color: var(--tinta); max-width: 60ch; }
.btn-eliminar {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--linea);
  border-radius: 6px;
  background: #fff;
  color: #ff496d;
  cursor: pointer;
}
.btn-eliminar:hover { background: #fef2f2; border-color: #EC6984; color: #EC6984; }
.no-encontrado { color: var(--texto-suave); font-style: italic; }
</style>
