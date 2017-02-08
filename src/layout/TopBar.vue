<template>
    <div id="top-bar">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'topBar',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>