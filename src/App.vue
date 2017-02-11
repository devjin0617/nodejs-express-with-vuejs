<template>
  <div id="app">
    <div class="container">
      <TopBar></TopBar>
      <SideBar></SideBar>
    </div>
  </div>
</template>

<script>
import TopBar from './layout/TopBar.vue'
import SideBar from './layout/SideBar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SideBar,
    TopBar
  }
}
</script>

<style scoped>
.container {
  min-width: 800px;
}
</style>