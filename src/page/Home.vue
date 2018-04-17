<template>
  <div>
      <common-header></common-header>
      <banner></banner>
      <section class="main container clear">
        <div class="main-panel fl">
          <div class="column-panel">
            <ul class="clear">
              <li><router-link to="/index" exact>热门</router-link></li>
              <li><router-link to="/index?column=1" exact>专题</router-link></li>
              <li><router-link to="/index?column=2" exact>人物</router-link></li>
              <li><router-link to="/index?column=3" exact>项目</router-link></li>
              <li><router-link to="/index?column=4" exact>咨询</router-link></li>
              <li><router-link to="/index?column=5" exact>深度</router-link></li>
              <li><router-link to="/index?column=6" exact>视频</router-link></li>
            </ul>
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
      listQuery: {},
      msg: 'Welcome to Your Vue.js App'
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
      this.listQuery = {
        category: this.$route.query.column || 0,
        page: this.$route.query.pageNum || 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 1030px;
  margin-top: 70px;
}
.column-panel {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  margin-top: 1px;

  li {
    width: 14%;
    float: left;
    text-align: center;
    a {
      display: inline-block;
      line-height: 40px;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid #000;
      }
      &.link-active {
        color: #000;
        border-bottom: 2px solid #000;
      }
    }
  }
}
</style>
