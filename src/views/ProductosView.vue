<template>
  <section class="card">
    <div class="header-section">
      <h2>Catalogo de Productos</h2>
      <router-link to="/productos/crear" class="btn btn--primary">+ Registrar Producto</router-link>
    </div>

    <p v-if="productosStore.productos.length === 0" class="empty-msg">
      No hay productos registrados actualmente.
    </p>

    <div v-else class="grid-productos">
      <article v-for="prod in productosStore.productos" :key="prod.id" class="card-producto">
        <div>
          <h3>{{ prod.nombre }}</h3>
          <p class="precio">{{ formatearMoneda(prod.precio) }}</p>
          <p class="stock">Disponibles: {{ prod.stock }}</p>
        </div>

        <div class="card-actions">
          <router-link :to="{ name: 'editar-producto', params: { id: prod.id } }" class="btn btn--info">
            Editar
          </router-link>
          <button type="button" class="btn btn--danger" @click="eliminar(prod)">Eliminar</button>
          <button
            type="button"
            class="btn btn--primary"
            :disabled="carritoStore.cantidadEnCarrito(prod.id) >= prod.stock"
            @click="carritoStore.agregarAlCarrito(prod)"
          >
            {{ prod.stock === 0 ? 'Agotado' : 'Comprar' }}
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useProductosStore } from '../stores/productosStore'
import { useCarritoStore } from '../stores/carritoStore'
import { formatearMoneda } from '../utils/formato'

const productosStore = useProductosStore()
const carritoStore = useCarritoStore()

function eliminar(producto) {
  if (!window.confirm(`Eliminar "${producto.nombre}" del catalogo?`)) return
  carritoStore.eliminarDelCarrito(producto.id)
  productosStore.eliminarProducto(producto.id)
}
</script>

<style scoped>
.header-section { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; }
.header-section .btn { padding: 10px 18px; }
.grid-productos { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card-producto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-bg);
}
.card-producto h3 { margin-bottom: 10px; font-size: 1.2rem; }
.precio { margin: 5px 0; color: var(--color-success); font-size: 1.1rem; font-weight: 700; }
.stock { margin: 0; color: var(--color-muted); font-size: 0.9rem; }
.card-actions { display: flex; flex-wrap: wrap; gap: 8px; }
</style>
