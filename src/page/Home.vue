<template>
  <div>
      <common-header></common-header>
      <banner></banner>
      <section class="main container clear">
        <div class="main-panel fl">
          <div class="tab-title">
            <router-link to="/index" :class="{active: type == 0}">热门</router-link>
            <router-link to="/index?type=1" :class="{active: type == 1}">专题</router-link>
            <router-link to="/index?type=2" :class="{active: type == 2}">人物</router-link>
            <router-link to="/index?type=3" :class="{active: type == 3}">项目</router-link>
            <router-link to="/index?type=4" :class="{active: type == 4}">咨询</router-link>
            <router-link to="/index?type=5" :class="{active: type == 5}">深度</router-link>
            <router-link to="/index?type=6" :class="{active: type == 6}">视频</router-link>
          </div>
          <articles :dataset="listQuery"></articles>
        </div>
        <aside class="side-panel fr">
          <side-block data-key="zhaopin"></side-block>
          <side-block data-key="travelApply"></side-block>
          <side-block data-key="hot"></side-block>
          <side-block data-key="feed"></side-block>
        </aside>
      </section>
      <common-footer></common-footer>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import Articles from '@/components/articles'
import SideBlock from '@/components/sideblock'

export default {
  name: 'home',
  data () {
    return {
      type: 0,
      listQuery: {},
      page: 0
    }
  },
  components: {
    Banner, Articles, SideBlock
  },
  created () {
    this.initData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'initData'
  },
  methods: {
    initData () {
      this.type = this.$route.query.type || 0
      this.page = this.$route.query.pageNum || 0
      this.listQuery = {
        category: this.type,
        page: this.page
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-title {
  margin-bottom: 20px;
}
</style>
