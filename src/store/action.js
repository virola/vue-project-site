import { userLogin, userLogout, getUser } from '../service/getData'

export default {

  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getUser()
    commit('getUser', res)
  },
  login ({ commit }) {
    userLogin(data => {
      commit('setUser', data)
    })
  },
  logout ({ commit }) {
    userLogout(resp => {
      commit('setUser', null)
    })
  }
}
