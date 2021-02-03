import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactDetails from '@/components/contacts/ContactDetails'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: ContactDetails,
    props: {
      readonly: true,
      action: "details"
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: ContactDetails,
    props: {
      readonly: false,
      action: "create"
    }
  },
  {
    path: '/update',
    name: 'Update',
    component: ContactDetails,
    props: {
      readonly: false,
      action: "update"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router