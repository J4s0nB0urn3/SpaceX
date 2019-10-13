import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Contact from '@/components/Contact'
import Statistics from '@/components/Statistics'
import More from '@/components/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})
