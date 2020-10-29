<template>
    <div class="pszh-home container pub1" >
        <div class="pszh-home-content pub2 container">
            <!-- <animation :img_Obj='img_Obj'></animation> -->
            <!-- <upFile></upFile> -->
            <upheader></upheader>
        </div>
    </div>
</template>
<script>
import animation from '../components/content/home/animation'
import upFile from './content/upfile'
import upheader from './content/upheader'
export default {
    data() {
        return {
            img_Obj:{
                src1:'',
                src2:'',
                src3:'',
                src4:''
            }
        }
    },
    components:{
        animation,
        upFile,
        upheader
    }
}
</script>
<style scoped>
    .pszh-home {
        background-color: #aaa;
        height: 750px;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    /* .pszh-home-content {
        width: 100%;
        background: rgba(14, 23, 48, 1);
        height: 750px;
        position: relative;
    } */
</style>