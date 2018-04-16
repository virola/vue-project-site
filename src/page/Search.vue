<template>
  <div>
    <common-header></common-header>
    <div class="container">
      search page
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
export default {
  name: 'search',
  metaInfo: {
    title: '搜索'
  },
  data () {
    return {
      'tags': []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      // data todo
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>
