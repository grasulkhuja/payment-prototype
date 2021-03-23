import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyLoad = componentPath => {
  return () =>
    import(/* webpackChunkName: '[request]' */ `@/views/${componentPath}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  {
    path: '/:orderId',
    name: 'payment',
    component: lazyLoad('Payment')
  },
  {
    path: '/acs/challenge/:acsId',
    name: 'acs',
    component: lazyLoad('ACSForm')
  },
  {
    path: '/results',
    name: 'results',
    component: lazyLoad('Results')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
