<template>
  <el-carousel :interval="2000" arrow="hover" height="500px">
    <el-carousel-item v-for="item in imgArr" :key="item.id" >
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item.src" alt="" height="500px" width="100%">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import img1 from '../../public/img/壁纸1.jpg';
import img2 from '../../public/img/壁纸2.jpg';
import img3 from '../../public/img/壁纸3.jpg'
export default {
    data() {
        return {
            imgArr:[
                {
                    id:1,
                    src:img1
                },
                {
                    id:2,
                    src:img2
                },
                {
                    id:3,
                    src:img3
                }
            ]
        }
    },
    mounted(){
      document.getElementsByClassName('el-carousel')[0].style.height = '500px';
      // document.getElementsByClassName('el-carousel--horizontal')[0].style.height = '500px';
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    font-size: .18rem;
    opacity: 0.75;
    line-height: 500px;
    line-height: 5rem;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* .el-carousel--horizontal {
      height: 500px !important;
      width: 100% !important;
      position: relative !important;
  } */
  /* .el-carousel__container {
      height: 500px !important;
  } */
</style>