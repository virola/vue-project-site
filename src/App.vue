<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: '有方的首页',
    titleTemplate: '%s | A vuejs project'
  }
}
</script>

<style lang="scss">
// 引入通用样式
@import 'assets/common';
</style>
