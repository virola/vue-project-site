import { setStore } from './util'

export default {
  getUser (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = { ...info }
    } else {
      state.userInfo = null
    }
  },
  setUser (state, info) {
    console.log(info)
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  },
  logout (state) {
    state.userInfo = null
  }
}
