import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'

$(function() {
  $('[data-toggle="popover"]').popover();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
