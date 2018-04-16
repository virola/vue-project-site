<template>
  <div>
    <h3 class="title">
      <router-link to="/user/collect">全部</router-link>
      <router-link to="/user/collect?type=1">文章</router-link>
      <router-link to="/user/collect?type=2">视频</router-link>
      <router-link to="/user/collect?type=3">旅行报名</router-link>
      <router-link to="/user/collect?type=4">行业资讯</router-link>
    </h3>
    <div class="main-content">
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-collect',
  data () {
    return {
      msg: 'Hello!'
    }
  },
  created() {
    this.type = this.$route.query.type || 0
  }
}
</script>
<style lang="scss" scoped>
@import 'src/assets/mixin';
@import 'src/assets/user/common';
</style>
