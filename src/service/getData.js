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
  'SEARCH_LIST': 'api/get/list.json',
  'TAG_LIST': 'api/get/side/tags.json',
  'ARTICLE_DATA' () {
    const list = ['api/get/article/2.json', 'api/get/article/1.json', 'api/get/article/3.json']
    return list[Math.round(Math.random() * (list.length - 1))]
  },
  'ARTICLE_COMMENTS': 'api/get/article/comments.json',
  'BANNER_DATA': 'api/get/banner.json',
  'SIDE_ZHAOPIN': 'api/get/side/zhaopin.json',
  'SIDE_TRAVEL_APPLY': 'api/get/side/travel.json',
  'SIDE_HOT_LIST': 'api/get/side/hot.json',
  'SIDE_RECOMMEND': 'api/get/side/recommend.json',
  'SIDE_TAGS': 'api/get/side/tags.json',
  'USER_DATA': 'api/get/user.json',
  'USER_LOGOUT': 'api/get/logout.json',
  'USER_COLLECT': 'api/get/user/collect.json',
  'USER_MSG': 'api/get/user/msg.json',
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
 * 根据关键字搜索文章列表
 * @param {string} keyword 关键字
 * @param {Number} category 栏目id
 * @param {Number} page 当前页码
 */
export const getSearchList = (params) => fetch(URL_API.SEARCH_LIST, {
  'keyword': params.keyword,
  'cate_id': params.category,
  'page_no': params.page
})

/**
 * 获取首页banner展示数据
 */
export const getBannerData = () => fetch(URL_API.BANNER_DATA)

/**
 * 获取热门标签
 */
export const getTagListData = () => fetch(URL_API.TAG_LIST)

/**
 * 获取侧边栏数据
 * @param {string} key 数据类型
 */
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
export const getArticleData = (id) => fetch(URL_API.ARTICLE_DATA(), {id})

/**
 * 根据id获取文章评论
 * @param {number} id 文章ID
 */
export const getArticleComment = (id) => fetch(URL_API.ARTICLE_COMMENTS, {id})

/**
 * 根据用户ID获取收藏列表
 * @param {number} userId 用户ID，为空默认获取登录用户
 * @param {number} type 收藏类型，有 1文章、2视频、3旅行报名、4行业资讯
 * @param {number} page 第几页
 */
export const getCollectList = (userId = '', type = 0, page = 1) => fetch(URL_API.USER_COLLECT, {userId, type, page})

/**
 * 获取用户消息列表
 * @param {number} all 是否显示所有消息， 0 显示未读消息， 1显示已读消息
 * @param {number} page 第几页
 */
export const getMsgList = (all = 0, page = 0) => fetch(URL_API.USER_MSG, {all, page})
