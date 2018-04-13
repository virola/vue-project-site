import { getUser } from '../service/getData'

export default {

  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getUser()
    commit('getUser', res.user_info)
  }
}
