<template>
      <el-container>
        <el-aside width="250px">
          <mleft></mleft>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>

import mleft from './aside/aside'
export default {
  components:{
    mleft
  },
  mounted() {
  },
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    padding: 0;
    overflow: hidden;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100vh;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  #app > .el-container {
    height:100vh;
    margin-bottom: 40px;
  }
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */

  ul, li {
    box-sizing: border-box;
  }
  .left-menu ul {
    height: 100vh;
  }
</style>
