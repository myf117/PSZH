<template>
    <div class="pszh-about container pub">
        <div class="pszh-about-content">
            <markdown></markdown>
            <!-- <psvideo :options='options1'></psvideo> -->
            <!-- <psrotate :options='options2'></psrotate> -->
            <!-- <testslot></testslot> -->
        </div>
    </div>
</template>
<script>
import txt from "../components/content/txt/txt";
import markdown from '../components/content/txt/markdown'
import psvideo from './content/video'
import psrotate from './content/rotate'
import psrotate_img1 from '../public/img/壁纸1.jpg'
import testslot from './content/testslot'
export default {
    data() {
        return {
            options1:{
                video_src:'https://www.qinlinkeji.com./images/index/top-video-bg.mp4',
                video_h2:'普森',
                video_p:'邻云'
            },
            options2:{
                img_src:psrotate_img1
            }
            
        }
    },
    components:{
        // txt
        markdown,
        psvideo,
        psrotate,
        testslot
    }
}
</script>
<style scoped>

</style>