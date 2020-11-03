<template>
    <div class="left-menu" >
        <el-menu
        default-active="menuone-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened='true'
        background-color=" #ffffff"
        text-color="#000000"
        active-text-color="#ffd04b"
        >
            <el-submenu index="menuone" >
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>一级目录1</span>
                </template>
                <el-menu-item index="menuone-1">二级目录1</el-menu-item>
                <el-menu-item index="menuone-2">二级目录2</el-menu-item>
                <el-menu-item index="menuone-3">二级目录3</el-menu-item>
                <el-submenu index="menuone-4"  class="two-menu">
                  <template slot="title">二级目录4</template>
                  <el-menu-item index="menuone-4-1">三级目录1</el-menu-item>
                  <!-- <el-menu-item index="menuone-4-2">三级目录2</el-menu-item>
                  <el-menu-item index="menuone-4-3">三级目录3</el-menu-item> -->
                </el-submenu>
            </el-submenu>
            <el-submenu index="menutwo">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>一级目录2</span>
                </template>
                <el-menu-item index="menutwo-1">二级目录1</el-menu-item>
                <el-menu-item index="menutwo-2">二级目录2</el-menu-item>
                <el-menu-item index="menutwo-3">二级目录3</el-menu-item>
            </el-submenu>
            <el-submenu index="menuthree">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>一级目录3</span>
                </template>
                <el-menu-item index="menuthree-1">二级目录1</el-menu-item>
                <el-menu-item index="menuthree-2">二级目录2</el-menu-item>
                <el-menu-item index="menuthree-3">二级目录3</el-menu-item>
            </el-submenu>
            <el-submenu index="menufour">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>一级目录4</span>
                </template>
                <el-menu-item index="menufour-1">二级目录1</el-menu-item>
                <el-menu-item index="menufour-2">二级目录2</el-menu-item>
                <el-menu-item index="menufour-3">二级目录3</el-menu-item>
                <el-submenu index="menufour-4"  class="two-menu">
                  <template slot="title">二级目录4</template>
                  <el-menu-item index="menufour-4-1">三级目录1</el-menu-item>
                  <!-- <el-menu-item index="menufour-4-2">三级目录2</el-menu-item>
                  <el-menu-item index="menufour-4-3">三级目录3</el-menu-item> -->
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key)
        let regx = /[0-9]/g;
        if(key.match(regx)){
          this.$router.push('/main/'+key);
          return;
        };
        this.$router.push('/main/'+key+'-1');
        return;
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      changeStyle(){
        //统一修改默认样式
        let title = document.querySelectorAll('.left-menu .el-submenu__title');
        let submenu_icon = document.querySelectorAll('.left-menu .el-submenu__icon-arrow');
        let item_group_title = document.querySelectorAll('.left-menu .el-menu-item-group__title');
        let menu_item = document.querySelectorAll('.left-menu .el-menu-item');
        for(let i = 0; i < title.length; i++){
            title[i].style.cssText='padding:0;display:flex;display:webkit-flex;align-items:center;width:100%; color:white';
            title[i].onmouseover = () => {
              title[i].style.cssText = "backgroundColor:#fff;padding:0;" 
            }
        }
        for(let i = 0; i < item_group_title.length; i++){
            item_group_title [i].style.padding= 0;
        }
        for(let i = 0; i < menu_item.length; i++){
            menu_item[i].style.padding = 0;
        }
      },
      goRouter(){
        let route = document.querySelectorAll('.el-menu-item');
        for(let i = 0; i < route.length; i++){
          route[i].onclick = (e) => {
            let key = e.target.index;
            console.log(e.target.innerHTML)
            // this.$router.push('/main/'+key);
            // return;
          }
        }
      }
    },
    mounted() {
        this.changeStyle();
        this.goRouter();
    },
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    width: 2.5rem;
    min-height: 600px;
    min-height: 6rem;
  }
  .left-menu {
      width: 100%;
      height: 100%;
      min-width: 200px;
  }
  .el-menu {
    border-right: none !important;
  }
  
  .el-icon-location,.el-menu span, .two-menu > .el-submenu__title {
    font-weight: 800;
    color: rgba(0,0,0,.7) !important;
  }
  .el-menu-item{
    color: rgba(0,0,0,.7) !important;
    font-weight: 400;
  }
</style>