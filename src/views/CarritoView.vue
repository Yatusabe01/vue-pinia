<template>
  <section class="card">
    <h2>Resumen del Pedido</h2>

    <p v-if="carritoStore.items.length === 0" class="empty-msg">
      Tu carrito esta vacio. Agrega productos desde el catalogo.
    </p>

    <div v-else>
      <div class="table-wrapper">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th><span class="sr-only">Acciones</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carritoStore.items" :key="item.id">
              <td>{{ item.nombre }}</td>
              <td>{{ formatearMoneda(item.precio) }}</td>
              <td>
                <div class="qty">
                  <button type="button" class="qty-btn" aria-label="Disminuir cantidad"
                    @click="carritoStore.cambiarCantidad(item.id, -1)">-</button>
                  <span>{{ item.cantidad }}</span>
                  <button type="button" class="qty-btn" aria-label="Aumentar cantidad"
                    :disabled="item.cantidad >= item.stock"
                    @click="carritoStore.cambiarCantidad(item.id, 1)">+</button>
                </div>
              </td>
              <td>{{ formatearMoneda(item.precio * item.cantidad) }}</td>
              <td>
                <button type="button" class="btn-remove" @click="carritoStore.eliminarDelCarrito(item.id)">
                  Quitar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cart-summary">
        <h3>Total: {{ formatearMoneda(carritoStore.totalCarrito) }}</h3>
        <button type="button" class="btn btn--danger" @click="carritoStore.vaciarCarrito()">
          Vaciar Carrito
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCarritoStore } from '../stores/carritoStore'
import { formatearMoneda } from '../utils/formato'

const carritoStore = useCarritoStore()
</script>

<style scoped>
h2 { margin-bottom: 20px; }
.table-wrapper { overflow-x: auto; }
.cart-table { width: 100%; margin-bottom: 25px; border-collapse: collapse; }
.cart-table th, .cart-table td { padding: 12px 15px; border-bottom: 1px solid var(--color-border); text-align: left; }
.cart-table th { background: var(--color-bg); color: #334155; font-weight: 600; }
.qty { display: inline-flex; align-items: center; gap: 10px; }
.qty-btn {
  width: 28px;
  height: 28px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background: #fff;
  font-weight: 700;
  cursor: pointer;
}
.qty-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-remove {
  padding: 6px 12px;
  border: 1px solid #fecaca;
  border-radius: 4px;
  background: #fee2e2;
  color: #991b1b;
  font-weight: 600;
  cursor: pointer;
}
.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 20px;
  border-top: 2px solid var(--color-border);
}
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
</style>
