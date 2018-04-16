<template>
  <div>
    <h3 class="title">
      <router-link to="/user/msg">未读消息</router-link>
      <router-link to="/user/msg?all=1">已读消息</router-link>
    </h3>
    <div class="main-content">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/assets/mixin';
@import 'src/assets/user/common';
</style>
