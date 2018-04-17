<template>
  <div>
    <h3 class="title"><span>账户设置</span></h3>
    <div class="main-content" v-if="userInfo">
      <ul class="auth-list">
        <li>
          <i class="icons"><icon name="mobile-alt"></icon></i>
          <span>
            <b>{{userInfo.mobile}}</b>
            <a href="#" class="btn btn-primary">修改密码</a>
          </span>
        </li>
        <li>
          <i class="icons"><icon name="brands/weibo"></icon></i>
          <span v-if="userInfo.auth_weibo">
            <b>已授权</b>
            <a href="#" class="btn btn-primary">取消授权</a>
          </span>
          <span v-else>
            <b>未授权</b>
            <a href="#" class="btn btn-primary">去授权</a>
          </span>
        </li>
        <li>
          <i class="icons"><icon name="brands/weixin"></icon></i>
          <span v-if="userInfo.auth_wechat">
            <b>已授权</b>
            <a href="#" class="btn btn-primary">取消授权</a>
          </span>
          <span v-else>
            <b>未授权</b>
            <a href="#" class="btn btn-primary">去授权</a>
          </span>
        </li>
        <li>
          <i class="icons"><icon name="brands/qq"></icon></i>
          <span v-if="userInfo.auth_qq">
            <b>已授权</b>
            <a href="#" class="btn btn-primary">取消授权</a>
          </span>
          <span v-else>
            <b>未授权</b>
            <a href="#" class="btn btn-primary">去授权</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  metaInfo: {
    title: '用户中心'
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'userInfo', 'login'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import 'src/assets/mixin';
@import 'src/assets/user/common';
</style>
