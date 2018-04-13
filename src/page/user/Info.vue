<template>
  <div>
    <section>user info: {{msg}}</section>
  </div>
</template>
<script>
export default {
  name: 'user-info',
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
