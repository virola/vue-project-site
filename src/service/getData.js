// @file 数据服务接口汇总
import {getStore} from '../store/util'

const fetch = async (url, params = {}, type = 'get') => {
  // debugger
  const response = await axios({
    method: type,
    url: url,
    data: params
  })
  let data = response.data
  if (data.status === 'ok') {
    return data.data
  } else {
    return {
      errmsg: data.errmsg
    }
  }
}

/**
 * 汇总接口URL配置
 */
const URL_API = {
  'ARTICLE_LIST': 'api/get/list.json',
  'BANNER_DATA': 'api/get/banner.json',
  'SIDE_ZHAOPIN': 'api/get/side/zhaopin.json',
  'SIDE_TRAVEL_APPLY': 'api/get/side/travel.json',
  'SIDE_HOT_LIST': 'api/get/side/hot.json',
  'SIDE_RECOMMEND': 'api/get/side/recommend.json',
  'SIDE_TAGS': 'api/get/side/tags.json',
  'USER_DATA': 'api/get/user.json',
  'USER_LOGIN': 'api/post/login',
  'USER_REGISTER': 'api/post/register',
  'USER_LOGOUT': 'api/get/logout'
}

/**
 * 获取文章列表
 * @param {Number} category 栏目id
 * @param {Number} page 当前页码
 */
export const getArticleList = (category = 0, page = 1) => fetch(URL_API.ARTICLE_LIST, {
  'cate_id': category,
  'page_no': page
})

/**
 * 获取首页banner展示数据
 */
export const getBannerData = () => fetch(URL_API.BANNER_DATA)

export const getSideData = (key) => {
  let url = ''
  switch (key) {
    case 'zhaopin':
      url = URL_API.SIDE_ZHAOPIN
      break
    case 'travel':
      url = URL_API.SIDE_TRAVEL_APPLY
      break
    case 'hot':
      url = URL_API.SIDE_HOT_LIST
      break
    case 'recommend':
      url = URL_API.SIDE_RECOMMEND
      break
    case 'tags':
      url = URL_API.SIDE_TAGS
      break
  }
  if (url) {
    return fetch(url)
  }
  return null
}

/**
 * 获取用户信息
 */
export const getUser = () => fetch(URL_API.USER_DATA, { user_id: getStore('user_id') })

/**
 * 用户登录接口
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export const userLogin = (username, password) => fetch(URL_API.USER_LOGIN, { username, password }, 'post')

export const userRegister = (params) => fetch(URL_API.USER_REGISTER, params, 'post')
/**
 * 用户登出
 */
export const userLogout = () => fetch(URL_API.USER_LOGOUT)
