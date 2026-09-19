<template>
  <!-- @submit.prevent evita que el navegador recargue la página al enviar -->
  <form class="formulario" @submit.prevent="enviar">
    <div class="campo">
      <label for="titulo">Título</label>
      <input
        id="titulo"
        v-model="nuevoLibro.titulo"
        type="text"
        placeholder="Ej: El Principito"
        @keyup.enter="enviar"
      />
    </div>

    <div class="campo">
      <label for="autor">Autor</label>
      <input
        id="autor"
        v-model="nuevoLibro.autor"
        type="text"
        placeholder="Ej: Miguel de Cervantes"
        @keyup.enter="enviar"
      />
    </div>

    <div class="campo">
      <label for="categoria">Categoría</label>
      <select id="categoria" v-model="nuevoLibro.categoria">
        <option disabled value="">Selecciona una categoría</option>
        <option>Novela</option>
        <option>Fantasía</option>
        <option>Ciencia ficción</option>
        <option>Poesía</option>
        <option>Ensayo</option>
      </select>
    </div>

    <div class="campo">
      <label for="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        v-model="nuevoLibro.descripcion"
        rows="3"
        placeholder="Breve sinopsis del libro"
      ></textarea>
    </div>

    <!-- Vista previa en tiempo real: demuestra la reactividad de v-model -->
    <p class="previa" v-if="nuevoLibro.titulo || nuevoLibro.autor">
      Vista previa: <strong>{{ nuevoLibro.titulo || '(sin título)' }}</strong>
      — {{ nuevoLibro.autor || '(sin autor)' }}
      <span v-if="nuevoLibro.categoria"> · {{ nuevoLibro.categoria }}</span>
    </p>

    <button type="submit" class="btn-agregar" :disabled="!formularioValido">
      Añadir libro
    </button>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue'

const emit = defineEmits(['agregar-libro'])

// Modelo del formulario: cada campo está vinculado con v-model
const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  categoria: '',
  descripcion: ''
})

const formularioValido = computed(() => {
  return nuevoLibro.titulo.trim() !== '' && nuevoLibro.autor.trim() !== ''
})

function enviar() {
  if (!formularioValido.value) return

  emit('agregar-libro', { ...nuevoLibro })

  // Limpiar el formulario tras enviar
  Object.assign(nuevoLibro, { titulo: '', autor: '', categoria: '', descripcion: '' })
}
</script>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem;
  border: 1px solid var(--linea);
  border-radius: 8px;
  background: var(--panel);
  margin-bottom: 1.5rem;
  font-family: sans-serif;
}
.campo { display: flex; flex-direction: column; gap: 0.3rem; }
.campo label { font-size: 0.8rem; color: var(--texto-suave); }
.campo input, .campo select, .campo textarea {
  padding: 0.5rem;
  border: 1px solid var(--linea);
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.9rem;
}
.campo input:focus, .campo select:focus, .campo textarea:focus {
  outline: none;
  border-color: var(--acento);
  box-shadow: 0 0 0 2px var(--acento-suave);
}
.previa { font-size: 0.85rem; color: var(--acento-oscuro); margin: 0; }
.btn-agregar {
  align-self: flex-start;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  background: var(--acento);
  color: #fff;
  cursor: pointer;
}
.btn-agregar:hover:not(:disabled) { background: var(--acento-oscuro); }
.btn-agregar:disabled { background: #b1d5ff; cursor: not-allowed; }
</style>
