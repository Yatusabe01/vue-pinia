<template>
  <section class="card form-container">
    <h2>Registrar Nuevo Producto</h2>
    <ProductoForm texto-boton="Guardar Producto" @guardar="guardar" />
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProductoForm from '../components/ProductoForm.vue'
import { useProductosStore } from '../stores/productosStore'

const productosStore = useProductosStore()
const router = useRouter()

function guardar(datos) {
  productosStore.agregarProducto({
    nombre: datos.nombre,
    precio: datos.precio,
    stock: datos.stock
  })
  router.push({ name: 'productos' })
}
</script>

<style scoped>
.form-container { max-width: 600px; margin: 0 auto; }
h2 { margin-bottom: 20px; }
</style>
