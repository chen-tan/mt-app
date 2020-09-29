<template>
  <div id="app">
    <default-page />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DefaultPage from '@/layout/default.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    DefaultPage
  }
}
</script>

<style>
  @import '~@/assets/css/reset.css'; 
  body{
    overflow-y:scroll;
  }
</style>
