<template>
  <form class="producto-form" @submit.prevent="enviar">
    <div class="form-group">
      <label for="nombre">Nombre del producto</label>
      <input id="nombre" v-model="form.nombre" type="text" required maxlength="80" placeholder="Ej. Monitor Curvo 27 pulgadas" />
    </div>

    <div class="form-group">
      <label for="precio">Precio (MXN)</label>
      <input id="precio" v-model.number="form.precio" type="number" required min="1" step="0.01" />
    </div>

    <div class="form-group">
      <label for="stock">Stock / Existencias</label>
      <input id="stock" v-model.number="form.stock" type="number" required min="0" step="1" />
    </div>

    <div class="form-actions">
      <button type="submit" class="btn" :class="claseBoton">{{ textoBoton }}</button>
      <router-link to="/productos" class="btn btn--neutral">Cancelar</router-link>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  producto: {
    type: Object,
    default: () => ({ nombre: '', precio: null, stock: 0 })
  },
  textoBoton: { type: String, default: 'Guardar' },
  claseBoton: { type: String, default: 'btn--primary' }
})

const emit = defineEmits(['guardar'])

const form = reactive({ ...props.producto })

function enviar() {
  emit('guardar', { ...form, nombre: form.nombre.trim() })
}
</script>

<style scoped>
.form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.form-group label { font-weight: 600; color: #334155; }
.form-group input {
  padding: 10px 14px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  font: inherit;
  outline: none;
}
.form-group input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15); }
.form-actions { display: flex; gap: 12px; margin-top: 25px; }
.form-actions .btn { padding: 10px 20px; }
</style>
