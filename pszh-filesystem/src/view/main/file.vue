<template>
      <el-container>
        <el-aside width="2.5rem" >
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

import mleft from '../aside/aside'
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
    font-weight: 800;
    color: rgba(0,0,0,.7);
    text-align: center;
    line-height: 60px;
    line-height: .6rem;
  }
  .el-header {
    padding: 0;
    overflow: hidden;
  }
  
  .el-aside {
    background-color: #ffffff;
    font-weight: 800;
    color: rgba(0,0,0,.7);
    text-align: center;
    line-height: 200px;
    line-height: 2rem;
    height:auto;
    /* position: fixed;
    left: 0;
    top: 60px; */
    /* height: calc(100% - 60px); */
  }
  
  .el-main {
    background-color: #ffffff;
    font-weight: 800;
    color: rgba(0,0,0,.7);
    text-align: center;
    /* line-height: 160px; */
    /* line-height: 1.6rem; */
    /* position: relative;
    left: 250px; */
  }
  
  #app > .el-container {
    height: calc(100% - 60px);
    height: calc(100% - 3.75rem);
    margin-bottom: 40px;
    margin-bottom: .4rem;
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
    text-align: left;
  }
  li {
    padding-left: 20px !important;
    padding-left: .2rem !important;
  }
  ul {
    padding-left: 0 !important;
  }
  .left-menu > ul {
    /* height: calc(100vh - 60px); */
    /* height: calc(100vh - .6rem); */
    /* height: 100%; */
  }
  /* .el-menu > .el-submenu > .el-submenu__title {
    box-sizing: border-box;
    padding: 0 10px !important;
  } */
</style>
