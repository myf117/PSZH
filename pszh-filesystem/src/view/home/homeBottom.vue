<template>
    <div class="home-bottom">
        <div class="home-bottom-top">home-bottom-top</div>
        <div class="home-bottom-bottom">home-bottom-bottom</div>
    </div>
</template>
<style  scoped>
    .home-bottom {
        width: 100%;
        height: 600px;
        height: 6rem;
        background-color: #cccccc;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .home-bottom-top, 
    .home-bottom-bottom {
        border: 1px solid red;
        border: .01rem solid red;
        width: 100%;
        height: 200px;
        height: 2rem;
    }
</style>