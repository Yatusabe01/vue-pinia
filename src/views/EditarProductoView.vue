<template>
  <section class="card form-container">
    <template v-if="producto">
      <h2>Editar Producto (ID: {{ producto.id }})</h2>
      <ProductoForm
        :producto="producto"
        texto-boton="Actualizar Cambios"
        clase-boton="btn--info"
        @guardar="actualizar"
      />
    </template>

    <template v-else>
      <h2>Producto no encontrado</h2>
      <p class="empty-msg">El producto que intentas editar no existe o fue eliminado.</p>
      <router-link to="/productos" class="btn btn--neutral">Volver al catalogo</router-link>
    </template>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import ProductoForm from '../components/ProductoForm.vue'
import { useProductosStore } from '../stores/productosStore'

const productosStore = useProductosStore()
const route = useRoute()
const router = useRouter()

const producto = productosStore.obtenerPorId(route.params.id)

function actualizar(datos) {
  productosStore.actualizarProducto(datos)
  router.push({ name: 'productos' })
}
</script>

<style scoped>
.form-container { max-width: 600px; margin: 0 auto; }
h2 { margin-bottom: 20px; }
</style>
