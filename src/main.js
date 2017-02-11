import 'element-ui/lib/theme-default/index.css';

import Vue from 'vue';
import App from './App.vue';
import VC from '../vuecon.config';

if (VC.use.element) {
  Vue.use(require('element-ui'));
}

if (VC.use.jquery) {
  window.$ = require('jquery');
}


new Vue({
  el: '#app',
  render: h => h(App),
});
