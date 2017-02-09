import 'element-ui/lib/theme-default/index.css';

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
});
