<template>
  <div>
      <common-header></common-header>
      <banner></banner>
      <section class="main container clear">
        <div class="main-panel fl">
          <div class="column-panel">
            <ul class="clear">
              <li><router-link to="/index" exact>热门</router-link></li>
              <li><router-link to="/index/topic" exact>专题</router-link></li>
              <li><router-link to="/index/person" exact>人物</router-link></li>
              <li><router-link to="/index/project" exact>项目</router-link></li>
              <li><router-link to="/index/counsel" exact>咨询</router-link></li>
              <li><router-link to="/index/deep" exact>深度</router-link></li>
              <li><router-link to="/index/video" exact>视频</router-link></li>
            </ul>
          </div>
          <articles></articles>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Banner, Articles, SideBlock
  },
  created () {
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // '$route': 'fetchData'
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
      &.router-link-active {
        color: #000;
        border-bottom: 2px solid #000;
      }
    }
  }
}
</style>
