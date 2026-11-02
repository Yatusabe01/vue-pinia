import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/productos', name: 'productos', component: () => import('../views/ProductosView.vue') },
    { path: '/productos/crear', name: 'crear-producto', component: () => import('../views/CrearProductoView.vue') },
    { path: '/productos/:id(\\d+)', name: 'editar-producto', component: () => import('../views/EditarProductoView.vue') },
    { path: '/carrito', name: 'carrito', component: () => import('../views/CarritoView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') }
  ]
})

export default router
