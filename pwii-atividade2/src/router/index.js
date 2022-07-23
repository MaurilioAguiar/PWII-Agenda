import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaContatos from '../views/ListaContatos.vue'
import Cadastrar from '../views/Cadastrar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'listacontatos',
    component: ListaContatos
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastrar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
