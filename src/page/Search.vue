<template>
  <div class="container">
    <a class="close-btn" href="#" @click="goBack">X</a>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      'tags': []
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
