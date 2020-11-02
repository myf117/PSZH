<template>
    <div class="pszh-home container pub1" >
        <hometop></hometop>
        <homecontent1></homecontent1>
        <homecontent2></homecontent2>
        <homecontent3></homecontent3>
        <homecontent4></homecontent4>
        <homebottom></homebottom>
    </div>
</template>
<script>
import hometop from './home/homeTop'
import homecontent1 from './home/homecontent1';
import homecontent2 from './home/homecontent2';
import homecontent3 from './home/homecontent3';
import homecontent4 from './home/homecontent4';
import homebottom from './home/homebottom';
export default {
    data() {
        return {
            
        }
    },
    components:{
        hometop,
        homecontent1,
        homecontent2,
        homecontent3,
        homecontent4,
        homebottom
    }
}
</script>
<style scoped>
    .pszh-home {
        width: 100%;
        background-color: #ffffff;
        height: auto;
        display: flex;
        flex-direction: column;
        display: -webkit-flex;
        justify-content: space-between;
        /* align-items: center; */
        box-sizing: border-box;
        min-width: 1200px;
        min-width: 12rem;
        max-width: 100%;
    }
    .pszh-home div {
        box-sizing: border-box;
    }
</style>