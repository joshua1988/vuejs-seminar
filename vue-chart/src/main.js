import Vue from 'vue'
import App from './App.vue'
import HighChartPlugin from "./plugins/highchart-plugins";

Vue.use(HighChartPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
