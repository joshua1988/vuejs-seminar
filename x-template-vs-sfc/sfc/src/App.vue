<template>
  <div id="app">
    <header-component></header-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>

</style>
