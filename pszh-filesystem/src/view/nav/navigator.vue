<template>
    <div class="header-menu">
        <div class="header-menu-left">logo</div>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        // this.activeIndex = key;
        // let path = null;
        // console.log(this.$router.push)
        // switch(key){
        //     case 1: path = '/main';this.$router.push('/main');break;
        //     // case 1: path = '/main';this.$router.router.push(path);break;
        //     // case 1: path = '/main';this.$router.router.push(path);break;
        //     // case 1: path = '/main';this.$router.router.push(path);break;
        //     // case 1: path = '/main';this.$router.router.push(path);break;
        // }
      },
      goRouter(index){
            this.activeIndex = index;
            let path = null;
            console.log(this.$router.push)
            switch(index){
                case 1: path = '/main';this.$router.push('main');break;
                // case 1: path = '/main';this.$router.router.push(path);break;
                // case 1: path = '/main';this.$router.router.push(path);break;
                // case 1: path = '/main';this.$router.router.push(path);break;
                // case 1: path = '/main';this.$router.router.push(path);break;
            }
      }
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
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
    .header-menu-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>