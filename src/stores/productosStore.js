import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductosStore = defineStore('productos', () => {
  const productos = ref([
    { id: 1, nombre: 'Laptop Gamer', precio: 18500, stock: 5 },
    { id: 2, nombre: 'Teclado Mecanico RGB', precio: 1200, stock: 12 },
    { id: 3, nombre: 'Mouse Inalambrico Ergonomico', precio: 650, stock: 20 }
  ])

  function obtenerPorId(id) {
    return productos.value.find((p) => p.id === Number(id))
  }

  function agregarProducto(nuevoProducto) {
    const id = productos.value.length
      ? Math.max(...productos.value.map((p) => p.id)) + 1
      : 1
    productos.value.push({ id, ...nuevoProducto })
  }

  function actualizarProducto(productoActualizado) {
    const index = productos.value.findIndex(
      (p) => p.id === Number(productoActualizado.id)
    )
    if (index !== -1) {
      productos.value[index] = {
        ...productoActualizado,
        id: Number(productoActualizado.id)
      }
    }
  }

  function eliminarProducto(id) {
    productos.value = productos.value.filter((p) => p.id !== id)
  }

  return { productos, obtenerPorId, agregarProducto, actualizarProducto, eliminarProducto }
})
