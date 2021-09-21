import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/models',
    name: 'Model S',
    component: () => import(/* webpackChunkName: "models" */ '../views/models/index.vue')
  },
  {
    path: '/model3',
    name: 'Model 3',
    component: () => import(/* webpackChunkName: "model3" */ '../views/model3/index.vue')
  },
  {
    path: '/modelx',
    name: 'Model X',
    component: () => import(/* webpackChunkName: "modelx" */ '../views/modelx/index.vue')
  },
  {
    path: '/modely',
    name: 'Model Y',
    component: () => import(/* webpackChunkName: "modely" */ '../views/modely/index.vue')
  },
  {
    path: '/solarroof',
    name: 'Solar Roof',
    component: () => import(/* webpackChunkName: "solarroof" */ '../views/solarroof/index.vue')
  },
  {
    path: '/solarpanels',
    name: 'Solar Panels',
    component: () => import(/* webpackChunkName: "solarpanels" */ '../views/solarpanels/index.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/home/shop.vue')
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/home/account.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/home/menu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
