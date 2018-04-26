import Highcharts from 'highcharts';

const HighChartPlugin = {
  install(Vue, options) {
    Vue.prototype.Highcharts = Highcharts;
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}

export default HighChartPlugin;