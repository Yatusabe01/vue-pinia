<template>
  <section class="card home">
    <h1>Bienvenido al Sistema de Gestion SPA</h1>
    <p>Aplicacion desarrollada con Vue 3 (Composition API), Vue Router, Pinia y Bun.</p>

    <div class="info-box">
      Utiliza el menu superior para navegar por el catalogo de productos, registrar nuevas
      altas en el inventario o administrar los articulos de tu carrito de compras.
    </div>
  </section>
</template>

<style scoped>
.home { padding: 40px; text-align: center; }
h1 { font-size: 2rem; margin-bottom: 12px; }
p { color: #475569; font-size: 1.1rem; margin: 0; }
.info-box {
  margin-top: 25px;
  padding: 20px;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-md);
  background: #f0fdf4;
  color: #166534;
}
</style>
