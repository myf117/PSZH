<template>
    <div class="pszh container" >
        <div class="pszh-nav">
            <div class="pszh-nav-left">
                <img src="" alt="logo" class="pszh-logo">
            </div>
            <div class="pszh-nav-right" @click="handleClick" >
                <div class="nav-right">首页</div>
                <div class="nav-right">智慧社区</div>
                <div class="nav-right">产品服务</div>
                <div class="nav-right">社区营销</div>
                <div class="nav-right">关于我们</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'second',
        index:0,
        flag:false
      };
    },
    methods: {
      handleClick(e) {
        let context = e.target.innerHTML;
        console.log(context);
        let path = '';
        switch(context){
            case '首页':path = '/home';this.checkFlag(path); if(!this.flag){this.$router.push(path);this.index = 0;}break;
            case '智慧社区':path = '/wit';this.checkFlag(path); if(!this.flag){this.$router.push(path);this.index = 1;}break;
            case '产品服务':path = '/production';this.checkFlag(path); if(!this.flag){this.$router.push(path);this.index = 2;}break;
            case '社区营销':path = '/comm';this.checkFlag(path); if(!this.flag){this.$router.push(path);this.index = 3;}break;
            case '关于我们':path = '/about';this.checkFlag(path); if(!this.flag){this.$router.push(path);this.index = 4;}break;
        }
      },
      clear(dom){
          for(let i = 0; i < dom.length; i++){
                dom[i].style.color='black';
                dom[i].style.borderBottom = '1px solid #fff'
          }
      },
      checkRoute(index){
          let dom = document.getElementsByClassName('nav-right');
          this.clear(dom);
          dom[index].style.color="orange";
          dom[index].style.borderBottom = '2px solid orange';
      },
      checkFlag(path){
          if(this.$route.path === path){
              this.flag = true;
          }
      }
    },
    watch: {
        'index':function(){
            this.checkRoute(this.index)
        }
    },
    mounted() {
        this.checkRoute(this.index)
    },
}
</script>
<style  scoped>
    .pszh {
        height: 60px;
        display: fixed;
        /* position: fixed; */
        top: 0;
        left: 0;
        background-color: #ddd;
    }
    .pszh-nav {
        height: 60px;
        width: 70%;
        /* padding: 0 250px; */
        margin: 0 auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .pszh-nav-left,.pszh-nav-right {
        display: inline-block;
        height: 100%;
        line-height: 50px;
        cursor: pointer;
    }
    .pszh-nav-left {
        background-color: #ccc;
        width: 100px;
    }
    .pszh-nav-right {
        width: 450px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
    }
    .nav-right {
        width: 20%;
        text-align: center;
        overflow: hidden;
    }
    .nav-right:hover {
        color: orange;
        border-bottom: 2px solid orange;
    }
    /* .pszh-nav-right:hover > div {
        color: orange;
        border-bottom: 1px solid orange;
    } */
</style>