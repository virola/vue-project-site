<template>
  <div>
      <common-header></common-header>
      <section class="container">
        Srticle
      </section>
      <common-footer></common-footer>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  data () {
    return {
      article: {
        title: 'test title',
        content: 'test content'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// todo...
</style>

