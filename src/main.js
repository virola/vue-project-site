// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// icons
import 'vue-awesome/icons/regular/bookmark'
import 'vue-awesome/icons/play'
import 'vue-awesome/icons/angle-left'
import 'vue-awesome/icons/angle-right'
import 'vue-awesome/icons/arrow-up'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/map-marker'
import 'vue-awesome/icons/thumbs-up'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/mobile-alt'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/regular/edit'
import 'vue-awesome/icons/regular/user'
import 'vue-awesome/icons/regular/star'
import 'vue-awesome/icons/regular/comments'
import 'vue-awesome/icons/brands/weibo'
import 'vue-awesome/icons/brands/weixin'
import 'vue-awesome/icons/brands/qq'
// register icon
import Icon from 'vue-awesome/components/Icon'

// 公共组件
import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false

Vue.component('common-header', Header)
Vue.component('common-footer', Footer)

// 全局注册（在 `main .js` 文件中）
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
