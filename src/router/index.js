import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/page/Home'
import Column from '@/page/Column'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Search from '@/page/Search'
import Article from '@/page/Article'

Vue.use(Router)
Vue.use(Meta)

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
      meta: {
        title: '首页'
      },
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
      meta: {
        title: '用户登录'
      },
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '用户注册'
      },
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        title: '搜索'
      },
      component: Search
    },
    {
      path: '/search_result',
      name: 'search-result',
      meta: {
        title: '搜索结果'
      }
    },
    {
      path: '/column/',
      name: 'column',
      component: Column
    },
    {
      path: '/article',
      meta: {
        title: '文章'
      },
      component: Article
    }
  ]
})
