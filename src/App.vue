<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
export default {
  name: 'App',
  components: {
     NavHeader
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
</style>
