<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view @scroll="scrollFunction"></router-view>
    <FooterComponent2></FooterComponent2>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent2 from './components/FooterComponent2.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent2
},
  /*
  methods: {
    scrollFunction(event) {
      if (window.scrollY > 50) {
        console.log('hola')
      }
      return window.scrollY > 100
    }
  }*/
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nixie+One&display=swap');

* {
  margin: 0;
  padding: 0;
  /*overflow-x: hidden;    en body */
  text-decoration: none;
}
</style>
