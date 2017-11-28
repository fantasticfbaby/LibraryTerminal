<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from 'components/common/MyHeader'
  import MyFooter from 'components/common/MyFooter'
  export default {
    name: 'app',
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .infobar {
    height: 50px;
    width: 100%;
    background-color: #000000;
  }
  .infobar span {
    line-height: 50px;
  }
</style>
