import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'

Vue.use(Vuex)

const state = {
  userInfo: null,
  login: true
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
