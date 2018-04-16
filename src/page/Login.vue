<template>
  <div>
    <section class="container user-page">
      <h2 class="logo center"><router-link to="/"><img src="../assets/img/logo.png"></router-link></h2>
      <div class="user-link">
        <router-link :to="{path: '/login', query: {redirectTo: redirectTo}}" class="router-link-active">登录</router-link>
        <router-link :to="{path: '/register', query: {redirectTo: redirectTo}}">注册</router-link>
      </div>
      <form action="#" novalidate class="needs-validation" :class="{'was-validated': validation.form}"  v-on:submit.prevent="onSubmit">
        <div class="form-group has-feedback">
          <div class="input-group" :class="{'is-invalid': validation.username}">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="icons"><icon name="user"></icon></i></span>
            </div>
            <input type="text" name="username" class="form-control" placeholder="用户名/手机号码" v-model="username" required>
            <div class="invalid-feedback">
              请输入用户名
            </div>
          </div>
        </div>
        
        <div class="form-group has-feedback">
          <div class="input-group" :class="{'is-invalid': validation.password}">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="icons"><icon name="lock"></icon></i></span>
            </div>
            <input type="password" name="password" class="form-control" placeholder="密码" v-model="password" required>
            <div class="invalid-feedback">
              请输入密码
            </div>
          </div>
        </div>
        <p class="pass-link"><router-link to="/password">忘记密码</router-link></p>

        <div class="form-group">
          <input type="submit" value="立即登录" class="form-control btn btn-primary">
        </div>
        <div class="alert alert-danger" role="alert" v-if="formMsg">
          {{formMsg}}
        </div>
      </form>
    </section>
    <common-footer></common-footer>
  </div>
</template>
<script>
import {userLogin} from '@/service/getData'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'login',
  metaInfo: {
    title: '登录'
  },
  data () {
    return {
      redirectTo: '',
      username: '',
      password: '',
      validation: {
        form: false,
        username: false,
        password: false
      },
      formMsg: ''
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // console.log(from.fullPath)
    next(vm => {
      // 把历史记录带进来，可能会去注册页面
      vm.redirectTo = vm.$route.query.redirectTo || from.fullPath
    })
  },
  methods: {
    ...mapMutations([
      'setUser',
    ]),
    async onSubmit () {
      let valids = this.validation
      valids.form = true

      if (!this.username) {
        valids.username = true
      }
      if (!this.password) {
        valids.password = true
      }
      if (valids.password || valids.username) {
        return
      }
      let data = {
        username: this.username,
        password: this.password
      }
      //用户名登录
      let resp = await userLogin(data.username, data.password)
      let userInfo = resp.userInfo
      if (!userInfo.user_id || userInfo.user_id < 0) {
        this.formMsg = userInfo.message || '登录失败'
      }
      else {
        this.setUser(userInfo)
        // redirect 重定向
        this.$router.push({ path: this.redirectTo || '/' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/user';
</style>
