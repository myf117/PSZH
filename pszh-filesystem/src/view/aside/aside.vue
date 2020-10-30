<template>
    <div class="left-menu">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-submenu index="1" >
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航四</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
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
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeStyle(){
        let title = document.querySelectorAll('.left-menu .el-submenu__title');
        let submenu_icon = document.querySelectorAll('.left-menu .el-submenu__icon-arrow');
        let item_group_title = document.querySelectorAll('.left-menu .el-menu-item-group__title');
        let menu_item = document.querySelectorAll('.left-menu .el-menu-item');
        for(let i = 0; i < title.length; i++){
            title[i].style.cssText='padding:0;display:flex;display:webkit-flex;align-items:center;width:100%; color:white';
            submenu_icon[i].style.marginLeft='20px'
        }
        for(let i = 0; i < item_group_title.length; i++){
            item_group_title [i].style.padding= 0;
        }
        for(let i = 0; i < menu_item.length; i++){
            menu_item[i].style.padding = 0;
        }
      }
    },
    mounted() {
        this.changeStyle();
    },
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
  .left-menu {
      width: 100%;
      height: 100%;
  }
</style>