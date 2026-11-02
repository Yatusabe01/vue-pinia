<template>
  <div class="app-container">
    <header class="navbar-header">
      <nav class="navbar" aria-label="Navegacion principal">
        <div class="brand">Sistema <span>SPA &amp; Pinia</span></div>

        <div class="nav-links">
          <router-link to="/">Inicio</router-link>
          <router-link to="/productos">Productos</router-link>
          <router-link to="/productos/crear">Nuevo Producto</router-link>
          <router-link to="/carrito">
            Carrito
            <span v-if="carritoStore.totalArticulos > 0" class="badge">
              {{ carritoStore.totalArticulos }}
            </span>
          </router-link>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useCarritoStore } from './stores/carritoStore'

const carritoStore = useCarritoStore()
</script>

<style scoped>
.navbar-header { position: sticky; top: 0; z-index: 100; background-color: #0f172a; box-shadow: var(--shadow-md); }
.navbar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}
.brand { color: #fff; font-size: 1.25rem; font-weight: 700; }
.brand span { color: var(--color-primary); }
.nav-links { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
.nav-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  color: var(--color-neutral);
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}
.nav-links a:hover { color: #fff; background: rgba(255, 255, 255, 0.08); }
.nav-links a.router-link-exact-active { color: #fff; background-color: var(--color-primary); }
.badge {
  min-width: 22px;
  padding: 0 7px;
  border-radius: 999px;
  background: var(--color-danger);
  color: #fff;
  font-size: 0.75rem;
  line-height: 22px;
  text-align: center;
}
.main-content { max-width: var(--container-width); margin: 40px auto; padding: 0 20px; }
</style>
