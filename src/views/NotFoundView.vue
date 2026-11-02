<template>
  <section class="card not-found">
    <h2>404 - Pagina no encontrada</h2>
    <p>La ruta que buscas no existe.</p>
    <router-link to="/" class="btn btn--primary">Volver al inicio</router-link>
  </section>
</template>

<style scoped>
.not-found { text-align: center; }
p { margin: 12px 0 20px; color: var(--color-muted); }
</style>
