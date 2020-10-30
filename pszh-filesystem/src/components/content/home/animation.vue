<template>
    <div class="main container">
        <div class="laybox">
            <div class="lay"  @mouseenter="handleEnter" @mouseleave="handleLeave" id="lay0">
                <img src="https://www.qinlinkeji.com/images/index/layer_in5.png" alt="" id="in5" style="opacity:1;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_out5.png" alt="" id="out5" style="opacity:0;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_icon5.png" alt="" id="icon5" style="opacity:0;" class="info">
                <img src="https://www.qinlinkeji.com/images/index/layer_text5.png" alt="" id="text5" style="opacity:0;" class="info">
            </div>
            <div class="lay"  @mouseenter="handleEnter" @mouseleave="handleLeave" id="lay1">
                <img src="https://www.qinlinkeji.com/images/index/layer_in4.png" alt="" id="in4" style="opacity:1;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_out4.png" alt="" id="out4" style="opacity:0;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_icon4.png" alt="" id="icon4" style="opacity:0;" class="info">
                <img src="https://www.qinlinkeji.com/images/index/layer_text4.png" alt="" id="text4" style="opacity:0;" class="info">
            </div>
            <div class="lay"  @mouseenter="handleEnter" @mouseleave="handleLeave" id="lay2">
                <img src="https://www.qinlinkeji.com/images/index/layer_in3.png" alt="" id="in3" style="opacity:1;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_out3.png" alt="" id="out3" style="opacity:0;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_icon3.png" alt="" id="icon3" style="opacity:0;" class="info">
                <img src="https://www.qinlinkeji.com/images/index/layer_text3.png" alt="" id="text3" style="opacity:0;" class="info">
            </div>
            <div class="lay"  @mouseenter="handleEnter" @mouseleave="handleLeave" id="lay3">
                <img src="https://www.qinlinkeji.com/images/index/layer_in2.png" alt="" id="in2" style="opacity:1;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_out2.png" alt="" id="out2" style="opacity:0;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_icon2.png" alt="" id="icon2" style="opacity:0;" class="info">
                <img src="https://www.qinlinkeji.com/images/index/layer_text2.png" alt="" id="text2" style="opacity:0;" class="info">
            </div>
            <div class="lay"  @mouseenter="handleEnter" @mouseleave="handleLeave" id="lay4">
                <img src="https://www.qinlinkeji.com/images/index/layer_in1.png" alt="" id="in1" style="opacity:1;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_out1.png" alt="" id="out1" style="opacity:0;" class="bg">
                <img src="https://www.qinlinkeji.com/images/index/layer_icon1.png" alt="" id="icon1" style="opacity:0;" class="info">
                <img src="https://www.qinlinkeji.com/images/index/layer_text1.png" alt="" id="text1" style="opacity:0;" class="info">
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:false,
            index:0,
            timer:null
        }
    },
    props:{
        img_Obj:{
            type:Object
        }
    },
    methods: {
        // 移入
        handleEnter(e){
            let childs1 = document.getElementById(`lay${this.index}`).children;
            this.clearOpcity(childs1[1]);
            this.clearOpcity(childs1[2]);
            this.clearOpcity(childs1[3]);
            this.visibleOpcity(childs1[0]);
            let childs = e.target.children;
            this.clearOpcity(childs[0]);
            this.visibleOpcity(childs[1]);
            this.visibleOpcity(childs[2]);
            this.visibleOpcity(childs[3]);
        },
        // 移除
        handleLeave(e){
            clearInterval(this.timer)
            let childs = e.target.children;
            this.index = Number(String(e.target.id).substr(e.target.id.length-1));
            this.clearOpcity(childs[1]);
            this.clearOpcity(childs[2]);
            this.clearOpcity(childs[3]);
            this.visibleOpcity(childs[0]);
            this.autoPlay(this.index + 1);
        },
        //隐藏元素
        clearOpcity(dom){
            dom.style.transitionDuration = '0.8s';
            dom.style.opacity = '0';
        },
        // 显示元素
        visibleOpcity(dom){
            dom.style.transitionDuration = '0.8s';
            dom.style.opacity = '1';
        },
        // 自动切换
        autoPlay(index){
            
            this.timer = setInterval(() => {
                if(index > 4) {
                    index = 0;
                }
                let childs1 = document.getElementById(`lay${((index - 1) < 0?4:(index - 1))}`).children;
                this.clearOpcity(childs1[1]);
                this.clearOpcity(childs1[2]);
                this.clearOpcity(childs1[3]);
                this.visibleOpcity(childs1[0]);
                let childs2 = document.getElementById(`lay${index}`).children;
                this.clearOpcity(childs2[0]);
                this.visibleOpcity(childs2[1]);
                this.visibleOpcity(childs2[2]);
                this.visibleOpcity(childs2[3]);
                index++;
                if(index > 4) {
                    index = 0;
                }
            },1500)
        }
    },
    mounted() {
        this.autoPlay(this.index)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>
<style scoped>
    .main {
        height: 700px;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .laybox {
        background: rgba(14, 23, 48, 1);
        color: #fff;
        text-align: center;
        /* overflow: hidden; */
        height: 700px;
        position: relative;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: center;
    }
    .laybox,.lay {
        width: 825px;
        position: relative;
        margin: 0 auto -30px;
    }
    #lay4,#lay3,#lay2,#lay1,#lay0 {
        z-index: 1;
        margin-top: 30px;
        height: 100px;
    }
    img:focus {
       outline: -webkit-focus-ring-color auto 1px
    }
    img {
        border-style: none;
        vertical-align: middle;
    }
    
    #in1,#in2,#in3,#in4,#in5,#in6，
    #out1,#out2,#out3,#out4,#out5 {
        bottom: 20px;
    }
    #icon1,#icon2,#icon3,#icon4,#icon5 {
        bottom: 40px;
        pointer-events:none;
    }
    #text1,#text2,#text3,#text4,#text5{
        pointer-events:none;
    }

    /* 最底层 */
    #in1 {
        width: 687px;
        height: 115px;
        position: absolute;
        left: 69px;
    }
    #out1 {
        width: 100%;
        height: 138px;
        z-index: 2;
        position: absolute;
        left: 0;
    }
    #icon1 {
        width: 645px;
        height: 138px;
        z-index: 3;
        position: absolute;
        left: 90px;
    }
    #text1 {
        width: 710px;
        height: 87px;
        z-index: 4;
        position: absolute;
        bottom: 120px;
        left: 65px;
    }

    /* 第四层 */
    #in2 {
        width: 619px;
        height: 103px;
        position: absolute;
        left: 103px;
    }
    #out2 {
        width: 742px;
        height: 142px;
        z-index: 2;
        position: absolute;
        left: 41px;
    }
    #icon2 {
        width: 580px;
        height: 124px;
        z-index: 3;
        position: absolute;
        left: 122px;
    }
    #text2 {
        width: 623px;
        height: 77px;
        z-index: 4;
        position: absolute;
        bottom: 110px;
        left: 101px;
    }

    /* 第三层 */
    #in3 {
        width: 556px;
        height: 93px;
        position: absolute;
        left: 134px;
    }
    #out3 {
        width: 669px;
        height: 111px;
        z-index: 2;
        position: absolute;
        left: 78px;
    }
    #icon3 {
        width: 523px;
        height: 117px;
        z-index: 3;
        position: absolute;
        left: 151px;
    }
    #text3 {
        width: 561px;
        height: 74px;
        z-index: 4;
        position: absolute;
        bottom: 110px;
        left: 135px;
    }

    /* 第二层 */
    #in4 {
        width: 501px;
        height: 84px;
        position: absolute;
        left: 162px;
    }
    #out4 {
        width: 599px;
        height: 100px;
        z-index: 2;
        position: absolute;
        left: 113px;
    }
    #icon4 {
        width: 471px;
        height: 113px;
        z-index: 3;
        position: absolute;
        left: 177px;
    }
    #text4 {
        width: 506px;
        height: 75px;
        z-index: 4;
        position: absolute;
        bottom: 100px;
        left: 159px;
    }

    /* 第一层 */
    #in5 {
        width: 451px;
        height: 75px;
        position: absolute;
        left: 187px;
    }
    #out5 {
        width: 538px;
        height: 90px;
        z-index: 2;
        position: absolute;
        left: 143px;
    }
    #icon5 {
        width: 282px;
        height: 98px;
        z-index: 3;
        position: absolute;
        left: 271px;
    }
    #text5 {
        width: 302px;
        height: 67px;
        z-index: 4;
        position: absolute;
        bottom: 90px;
        left: 261px;
    }
        
</style>

