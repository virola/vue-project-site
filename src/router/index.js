import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Column from '@/page/Column'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Search from '@/page/Search'
import Article from '@/page/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':column',
          component: Home
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/search_result',
      name: 'search-result'
    },
    {
      path: '/column/',
      name: 'column',
      component: Column
    },
    {
      path: '/article',
      component: Article
    }
  ]
})
