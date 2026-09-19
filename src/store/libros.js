// store/libros.js
// -----------------------------------------------------------------
// Este archivo es el "Model" del patrón MVVM.
// Centraliza el estado de los libros para que cualquier componente
// (formulario, lista, detalle) pueda leerlo o modificarlo sin
// pasar props manualmente por cada nivel. Es la forma más simple
// de lograr un estado compartido en Vue 3 sin instalar Pinia/Vuex.
// -----------------------------------------------------------------
import { reactive } from 'vue'

// Estado reactivo global: un objeto con un arreglo de libros
export const libroStore = reactive({
  libros: [
    {
      id: 1,
      titulo: 'Orgullo y prejuicio',
      autor: 'Jane Austen',
      categoria: 'Novela',
      descripcion: 'siglo XIX y sigue los dilemas de una madre empeñada en casar a sus cinco hijas debido a las restrictivas leyes de herencia de la época.'
    },
    {
      id: 2,
      titulo: 'El señor de los anillos (Trilogía)',
      autor: 'J. R. R. Tolkien',
      categoria: 'Fantasía',
      descripcion: 'La historia narra el peligroso viaje de Frodo Bolsón, un joven hobbit de la apacible Comarca, para destruir el Anillo Único y evitar que caiga en manos de su creador, el Señor Oscuro Sauron.'
    }
  ]
})

// Contador simple para generar ids únicos
let siguienteId = 3

// Métodos del store (acciones que modifican el modelo)
export function agregarLibro(libro) {
  libroStore.libros.push({
    id: siguienteId++,
    ...libro
  })
}

export function eliminarLibro(id) {
  const index = libroStore.libros.findIndex(libro => libro.id === id)
  if (index !== -1) {
    libroStore.libros.splice(index, 1)
  }
}

export function obtenerLibroPorId(id) {
  return libroStore.libros.find(libro => libro.id === Number(id))
}
