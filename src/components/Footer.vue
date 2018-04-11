<template>
  <footer class="footer">
    <div class="container clear">
      <h4 class="f-logo fl"><img src="../assets/img/s_logo.png" alt="有方"></h4>
      <div class="f-links fl">
        <p class="clear">
          <router-link to="/">关于有方</router-link>
          <router-link to="/">加入我们</router-link>
          <router-link to="/">版权说明</router-link>
          <router-link to="/">帮助中心</router-link>
          <router-link to="/">联系我们</router-link>
          <router-link to="/">意见反馈</router-link>
          <router-link to="/">合作伙伴</router-link>
        </p>
        <p>© 2018 www.archiposition.com | All rights reserved | Powered by Dianzhantech</p>
        <p>版权所有有方 粤ICP备13041838号 </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'common-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  margin: 60px 0 0;
  padding: 20px 0;
  background: #0e1835;
  color: #d8d8d8;
  font-size: 12px;

  a {
    color: #d8d8d8;
    margin: 0 5px;
  }
  p {
    margin: 6px 0;
  }
}
.f-logo {
  margin: 10px 80px 0 0;
}
</style>
