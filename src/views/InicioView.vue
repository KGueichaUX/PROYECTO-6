<template>
  <section class="inicio">
    <h1>Bienvenido a BookList</h1>
    <p>
      En esta plataforma puedes registrar y añadir nuevos libros al catálogo mediante una interfaz dinámica, buscar y filtrar títulos por autor o categoría para organizar el contenido según tus necesidades, consultar el detalle completo de cada publicación y mantener un listado general de obras siempre actualizado en tiempo real.
    </p>

    <RouterLink to="/libros" class="btn-ir-catalogo">
      Ir al Catálogo →
    </RouterLink>
  </section>
</template>

<!--
  Esta vista no maneja estado ni lógica propia, así que no necesita
  bloque <script setup>: solo presenta contenido y navegación.
-->

<style scoped>
.inicio {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
}
.inicio h1 { font-family: 'Georgia', serif; font-size: 2rem; margin-bottom: 0; color: var(--tinta); }
.inicio p { color: var(--texto-suave); line-height: 1.6; max-width: 60ch; margin: 0; }
.btn-ir-catalogo {
  display: inline-block;
  margin-top: 0.6rem;
  padding: 0.6rem 1.2rem;
  background: var(--acento);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}
.btn-ir-catalogo:hover { background: var(--acento-oscuro); }
</style>
