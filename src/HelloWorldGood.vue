<template>
  <div id="hello-world-good">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
/**import**/
import TopBar from './components/TopBar.vue'
import NaviBar from './components/NaviBar.vue'
import Button from './components/Button.vue'

export default {
  name: 'hello-world-good',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App With Vuecon'
    }
  },
  components: {
    TopBar,
		NaviBar,
		Button
  }
}
</script>