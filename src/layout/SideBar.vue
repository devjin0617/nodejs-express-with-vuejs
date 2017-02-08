<template>
  <div id="side-bar">
    <el-row class="tac">
        <el-col :span="8">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
                <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>