# BookList Nova

Gestión de libros para la Editorial Nova, construida con Vue 3

## Instalación y ejecución

```bash
npm install
npm run serve
```

Abre `http://localhost:8080`.


## Estructura del proyecto

```
booklist-nova/
├── public/
│   └── index.html
├── package.json          (incluye scripts, deps y eslintConfig)
├── vue.config.js
├── babel.config.js
├── README.md
└── src/
    ├── main.js
    ├── App.vue
    ├── router/
    │   └── index.js
    ├── store/
    │   └── libros.js
    ├── components/
    │   ├── Libro.vue
    │   └── FormularioLibro.vue
    └── views/
        ├── InicioView.vue
        ├── ListaLibros.vue
        └── DetalleLibro.vue
```
