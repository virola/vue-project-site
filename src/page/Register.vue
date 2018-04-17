<template>
  <div>
    <section class="container user-page">
      <h2 class="logo center"><router-link to="/"><img src="../assets/img/logo.png"></router-link></h2>
      <div class="user-link">
        <router-link :to="{path: '/login', query: {redirectTo: redirectTo}}">登录</router-link>
        <router-link :to="{path: '/register', query: {redirectTo: redirectTo}}" class="link-active">注册</router-link>
      </div>
      <form novalidate action="#" class="needs-validation" :class="{'was-validated': validation.form}" v-on:submit.prevent="onSubmit">
        <div class="form-group has-feedback" :class="{'was-validated': validation.phone.invalid}">
          <div class="input-group" :class="{'is-invalid': validation.phone.invalid}">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="icons"><icon name="mobile-alt"></icon></i></span>
            </div>
            <input type="tel" name="phone" class="form-control" :class="{'is-invalid': validation.phone.invalid}" placeholder="手机号码" v-model.trim.number="phone" required>
            <div class="invalid-feedback">
            {{validation.phone.msg}}
            </div>
          </div>
        </div>

        <div class="form-group has-feedback" :class="{'was-validated': validation.mcode.invalid}">
          <div class="input-group" :class="{'is-invalid': validation.mcode.invalid}">
            <input type="text" name="mcode" class="form-control" placeholder="验证码" v-model.trim.number="mcode" required>
            <div class="input-group-append">
              <button id="get-mcode" v-on:click.prevent.stop="getMobileCode" class="btn btn-primary">获取验证码</button>
            </div>
            <div class="invalid-feedback">
              {{validation.mcode.msg}}
            </div>
          </div>
        </div>
        <div class="form-group has-feedback" :class="{'was-validated': validation.password.invalid}">
          <div class="input-group" :class="{'is-invalid': validation.password.invalid}">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="icons"><icon name="lock"></icon></i></span>
            </div>
            <input type="password" name="password" class="form-control" :class="{'is-invalid': validation.password.invalid}" placeholder="输入密码" v-model="password" required>
            <div class="invalid-feedback">
              {{validation.password.msg}}
            </div>
          </div>
        </div>
        <div class="form-group has-feedback" :class="{'was-validated': validation.passwordrepeat.invalid}">
          <div class="input-group" :class="{'is-invalid': validation.passwordrepeat.invalid}">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="icons"><icon name="lock"></icon></i></span>
            </div>
            <input type="password" name="password_repeat" class="form-control" :class="{'is-invalid': validation.passwordrepeat.invalid}" placeholder="再次输入密码" v-model="passwordrepeat" required>
            <div class="invalid-feedback">
              {{validation.passwordrepeat.msg}}
            </div>
          </div>
        </div>
        <div class="form-group">
          <input type="submit" value="立即注册" class="form-control btn btn-primary">
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
import {userRegister} from '@/service/getData'
import {mapMutations} from 'vuex'

export default {
  name: 'register',
  metaInfo: {
    title: '用户注册'
  },
  data () {
    let msg = '一行提示文字'
    let invalid = false
    return {
      redirectTo: '',
      phone: '',
      mcode: '',
      password: '',
      passwordrepeat: '',
      validation: {
        form: false,
        phone: {msg, invalid},
        mcode: {msg, invalid},
        password: {msg, invalid},
        passwordrepeat: {msg, invalid}
      },
      formMsg: ''
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      // 把历史记录带进来，可能会去注册页面
      vm.redirectTo = vm.$route.query.redirectTo || from.fullPath
      // console.log(vm.redirectTo)
    })
  },
  computed: {
    // 判断手机号码
    rightPhoneNumber () {
      return /^1\d{10}$/gi.test(this.phone)
    }
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    async onSubmit () {
      let valids = this.validation
      valids.form = true
      valids.phone.invalid = !this.phone || !this.rightPhoneNumber
      valids.phone.msg = '请输入手机号码'

      valids.mcode.invalid = !this.mcode
      valids.mcode.msg = '请输入验证码'

      valids.password.invalid = !this.password
      valids.password.msg = '请输入密码'
      if (!this.passwordrepeat) {
        valids.passwordrepeat.invalid = true
        valids.passwordrepeat.msg = '请输入密码'
      } else if (this.passwordrepeat !== this.password) {
        valids.passwordrepeat.invalid = true
        valids.passwordrepeat.msg = '两次密码输入不一致'
      } else {
        valids.passwordrepeat.invalid = false
      }
      let formvalidate = true
      for (let item in valids) {
        if (valids[item].invalid) {
          formvalidate = false
        }
      }
      if (!formvalidate) {
        return
      }
      let data = {
        phone: this.phone,
        password: this.password
      }
      // 用户注册
      let resp = await userRegister(data)
      let userInfo = resp.userInfo
      // console.log(userInfo)
      if (!userInfo.user_id || userInfo.user_id < 0) {
        this.formMsg = userInfo.message || '注册失败'
      } else {
        this.setUser(userInfo)
        this.$router.go(-1)
      }
    },
    getMobileCode () {
      // 获取验证码
      // let phone = this.phone
      if (!this.phone) {
        this.validation.phone.invalid = true
        this.validation.phone.msg = '请输入手机号码'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/user';
</style>
