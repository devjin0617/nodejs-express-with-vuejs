<template>
  <div id="app">
    <div class="container">
      <TopBar></TopBar>
      <el-row class="tac">
        <el-col :span="8">
          <SideBar></SideBar>
        </el-col>
        <el-col :span="16">
          <div>Content</div>
        </el-col>
      </el-row>
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