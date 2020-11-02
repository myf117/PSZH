<template>
  <div id="app">
      <navigator></navigator>
      <router-view/>
  </div>
</template>

<script>
import navigator from './view/nav/navigator'
export default {
  name: 'App',
  components:{
    navigator
  },
  mounted() {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

</style>
