// router/index.js
// -----------------------------------------------------------------
// Lección 5: Manejo de rutas con Vue Router.
// Define las 3 vistas obligatorias:
//   /            -> InicioView
//   /libros      -> ListaLibros
//   /libros/:id  -> DetalleLibro (ruta dinámica)
// -----------------------------------------------------------------
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/libros',
    name: 'libros',
    component: ListaLibros
  },
  {
    path: '/libros/:id',
    name: 'detalle-libro',
    component: DetalleLibro,
    props: true // convierte el parámetro :id en una prop del componente
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
