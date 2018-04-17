import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/page/Home'
import Column from '@/page/Column'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Search from '@/page/Search'
import Article from '@/page/Article'

// 登录后页面
import User from '@/page/User'
import UserIndex from '@/page/user/Index'
import UserCollect from '@/page/user/Collect'
import UserInfo from '@/page/user/Info'
import UserMsg from '@/page/user/Msg'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Home,
      children: [
        {
          path: ':column',
          component: Home
        }
      ]
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          component: UserIndex
        },
        {
          path: 'collect',
          component: UserCollect
        },
        {
          path: 'info',
          component: UserInfo
        },
        {
          path: 'msg',
          component: UserMsg
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
