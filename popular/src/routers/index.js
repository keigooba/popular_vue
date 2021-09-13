import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/templates/Login'
import Home from '../components/templates/Home'
import Contact from '../components/templates/Contact'
import ContactList from '../components/templates/ContactList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/contact/list',
    name: 'contactList',
    component: ContactList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
