import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  const items = ref([])

  const totalArticulos = computed(() =>
    items.value.reduce((suma, item) => suma + item.cantidad, 0)
  )

  const totalCarrito = computed(() =>
    items.value.reduce((suma, item) => suma + item.precio * item.cantidad, 0)
  )

  function cantidadEnCarrito(id) {
    return items.value.find((item) => item.id === id)?.cantidad ?? 0
  }

  function agregarAlCarrito(producto) {
    const existente = items.value.find((item) => item.id === producto.id)

    if (existente) {
      if (existente.cantidad < producto.stock) existente.cantidad += 1
      return
    }

    if (producto.stock > 0) {
      items.value.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
        cantidad: 1
      })
    }
  }

  function cambiarCantidad(id, delta) {
    const item = items.value.find((i) => i.id === id)
    if (!item) return

    const nuevaCantidad = item.cantidad + delta
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id)
    } else if (nuevaCantidad <= item.stock) {
      item.cantidad = nuevaCantidad
    }
  }

  function eliminarDelCarrito(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function vaciarCarrito() {
    items.value = []
  }

  return {
    items,
    totalArticulos,
    totalCarrito,
    cantidadEnCarrito,
    agregarAlCarrito,
    cambiarCantidad,
    eliminarDelCarrito,
    vaciarCarrito
  }
})
