<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import navigator from './view/nav/navigator'
import bottom from './view/nav/bottom.vue'
export default {
  name: 'App',
  components:{
    navigator,
    bottom
  },
  mounted() {
    console.log(this.$route)
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
  position: relative;
}
</style>
