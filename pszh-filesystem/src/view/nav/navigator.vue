<template>
    <div class="header-menu">
        <div class="header-menu-left">logo</div>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
            <el-menu-item index="1" @click="goRouter(1)">主页</el-menu-item>
            <el-menu-item index="2" @click="goRouter(2)">文档</el-menu-item>
            <el-menu-item index="3">菜单3</el-menu-item>
            <el-menu-item index="4">菜单4</el-menu-item>
            <el-menu-item index="5">菜单5</el-menu-item>
        </el-menu>
        <div class="header-menu-right">
            <sear></sear>
            <mybutton></mybutton>
        </div>
    </div>
</template>
<script>
import sear from '../../components/nav/search'
import mybutton from '../../components/nav/loginbutton'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:''
      };
    },
    components:{
        sear,
        mybutton
    },
    methods: {
      goRouter(index){
            this.activeIndex = index;
            let path = null;
            console.log(this.$router.push)
            switch(index){
                case 1: path = '/home'; this.activeIndex2 = '1';this.$router.push(path);break;
                case 2: path = '/main';this.activeIndex2 = '2';this.$router.push(path);break;
            }
            let route = this.$route.path.substr(1);
            sessionStorage.setItem('path',route);
      },
     
    },
    mounted() {
    },
}
</script>
<style  scoped>
    .header-menu {
        background-color: #545c64;
        width: 100%;
        height: 60px;
        /* height: .6rem; */
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 100;
        min-width: 1200px;
        min-width: 12rem;
    }
    .header-menu-left,
    .header-menu-right {
        height: 100%;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
    }
    .header-menu-left {
        width: 10%;
        line-height: 60px;
        line-height: .6rem;
        min-width: 150px;
        min-width: 1.5rem;
    }
    .header-menu-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 700px;
        min-width: 7rem;
    }
    .header-menu > ul li,.header-menu > ul  {
        border: none;
    }
    .el-menu-demo {
        display: flex;
        flex-wrap: nowrap;
        min-width: 350px;
        min-width: 3.5rem;
    }
</style>