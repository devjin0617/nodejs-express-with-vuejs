<template>
  <div id="app">
    <TopBar></TopBar>
    <SideBar></SideBar>
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