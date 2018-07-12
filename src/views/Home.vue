<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created() {
    console.warn(12)
    console.log(this.$logger)
    this.$logger.warn(121)
    this.$logger.log(121)
    this.$logger.error(121, new Error('789'))
    this.$logger('ri', 2, 3, {l: 2})
  }
}
</script>
