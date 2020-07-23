import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rooms',
    component: () => import('../views/Rooms.vue')
  },
  {
    path: '/room/:id',
    name: 'RoomDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/RoomDetails.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
