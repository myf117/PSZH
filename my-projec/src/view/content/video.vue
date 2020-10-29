<template>
    <div class="ps-vbox container">
        <video :src="options.video_src" autoplay loop muted class="ps-vbox-video" width="100%" height="100%" style="width=100% height=100%;object-fit: fill" ></video>
        <div class="ps-vbox-mask"></div>
        <div class="ps-vbox-mcontent">
            <h1>{{options.video_h2}}</h1>
            <p>{{options.video_p}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        options:{
            type: Object
        }
    }
}
</script>
<style  scoped>
    .ps-vbox {
        border: 1px solid goldenrod;
        overflow: hidden;
        position: relative;
        height: 500px;
    }
    .ps-vbox-mask {
        background-color: #fff;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        height: 500px;
        width: 100%;
    }
    .ps-vbox-mcontent {
        width: 20%;
        height: 20%;
        position: absolute;
        left: 40%;
        top: 40%;
        color: #fff;
        text-align: center;
    }
    .ps-vbox-mcontent > p {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 500;
    }
    .ps-vbox-mcontent > h1 {
        font-size: 35px;
        font-weight: 600;
    }
</style>