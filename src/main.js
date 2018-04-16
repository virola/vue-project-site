// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// icons
import 'vue-awesome/icons'
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
