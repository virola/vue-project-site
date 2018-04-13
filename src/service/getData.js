// @file 数据服务接口汇总
import {getStore} from '../store/util'

const fetch = async (url, params = {}, type = 'get') => {
  type = type.toLowerCase()
  // console.log(params)
  let options = {
    method: type,
    url: url
  }
  // get params or post data
  if (type === 'get') {
    options.params = params
  } else if (type === 'post') {
    options.data = params
  }
  // debugger
  const response = await axios(options)
  let content = response.data
  if (content.status === 'ok') {
    // success
    return content.data
  } else {
    // failure
    return {
      data: content.data,
      errmsg: content.errmsg || '请求错误'
    }
  }
}

/**
 * 汇总接口URL配置
 */
const URL_API = {
  // get requests
  'ARTICLE_LIST': 'api/get/list.json',
  'ARTICLE_DATA': 'api/get/article/1.json',
  'ARTICLE_COMMENTS': 'api/get/article/comments.json',
  'BANNER_DATA': 'api/get/banner.json',
  'SIDE_ZHAOPIN': 'api/get/side/zhaopin.json',
  'SIDE_TRAVEL_APPLY': 'api/get/side/travel.json',
  'SIDE_HOT_LIST': 'api/get/side/hot.json',
  'SIDE_RECOMMEND': 'api/get/side/recommend.json',
  'SIDE_TAGS': 'api/get/side/tags.json',
  'USER_DATA': 'api/get/user.json',
  'USER_LOGOUT': 'api/get/logout.json',
  // post requests
  'USER_LOGIN': 'api/post/login',
  'USER_REGISTER': 'api/post/register'
}

/**
 * 获取文章列表
 * @param {Number} category 栏目id
 * @param {Number} page 当前页码
 */
export const getArticleList = (params) => fetch(URL_API.ARTICLE_LIST, {
  'cate_id': params.category,
  'page_no': params.page
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
export const userSignout = () => fetch(URL_API.USER_LOGOUT)

/**
 * 根据id获取文章数据
 * @param {number} id article id
 */
export const getArticleData = (id) => fetch(URL_API.ARTICLE_DATA, {id})

/**
 * 根据id获取文章评论
 * @param {number} id 文章ID
 */
export const getArticleComment = (id) => fetch(URL_API.ARTICLE_COMMENTS, {id})
