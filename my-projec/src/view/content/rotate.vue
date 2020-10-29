<template>
    <div class="ps-rbox .ps-public">
        <div class="ps-rbox-img">
            <img :src="options.img_src" alt="" width="100%" height="100%">
        </div>
        <div class="ps-rbox-content">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        options:{
            type:Object
        }
    }
}
</script>
<style scoped>
    .ps-rbox {
        width: 300px;
        height: 300px;
        border: 1px solid red;
        text-align: center;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 5px;
    }
    .ps-rbox:hover {
        box-shadow: 1px 1px 5px #39d8e4d8;
        transition-duration: 0.5s;
    }
    .ps-rbox-img {
        width: 35%;
        height: 35%;
        border-radius: 50%;
        overflow: hidden;
    }
    .ps-rbox-content{
        width: 90%;
        height: 60%;
        border: 1px solid blue;
    }
    
</style>