import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ContactView from '../components/ContactView.vue'
// import MyWork from '../components/MyWork.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: ContactView
  // },
  // {
  //   path: '/work',
  //   name: 'work',
  //   component: MyWork
  // }
]

const router = new VueRouter({
  routes
})

export default router
