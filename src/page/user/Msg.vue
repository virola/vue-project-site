<template>
  <div>
    <section>user msg: {{msg}}</section>
  </div>
</template>
<script>
export default {
  name: 'user-msg',
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
