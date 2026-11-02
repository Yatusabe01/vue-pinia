const formateadorMoneda = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN'
})

export function formatearMoneda(valor) {
  return formateadorMoneda.format(valor)
}
