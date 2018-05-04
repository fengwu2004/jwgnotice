<template>
  <div id="app">
    <notice-list></notice-list>
  </div>
</template>

<script>
  import NoticeList from '@/components/NoticeList'
  export default {
    components: {NoticeList},
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }
</style>
