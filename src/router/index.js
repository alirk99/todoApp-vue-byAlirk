import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import {store} from 'vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {requiresLogin: false,},
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    meta: {requiresLogin: false,},
  },
  {
    path: '/mylist',
    name: 'mylist',
    component: function () {
      return import('../views/MyListView.vue')
    },
    meta: {requiresLogin: true,},
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import('../views/SignupView.vue')
    },
    meta: {requiresLogin: false,},
  },
  {
    path: '/signin',
    name: 'signin',
    component: function () {
      return import('../views/SigninView.vue')
    },
    meta: {requiresLogin: false,},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
