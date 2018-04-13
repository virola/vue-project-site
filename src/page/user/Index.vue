<template>
  <div>
    <section>user index: {{msg}}</section>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/assets/mixin';

</style>
