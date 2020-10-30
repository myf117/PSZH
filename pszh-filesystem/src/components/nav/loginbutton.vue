<template>
    <div class="header-menu-right-lrbox">
        <button class="header-rbutton">注册</button>
        <button class="header-lbutton">登录</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-menu-right-lrbox {
        width: 20%;
        height: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 20px;
    }
    .header-rbutton, .header-lbutton {
        width: 60px;
        height: 90%;
        outline: none;
        border: none;
        border-radius: 5px;
        color: rgb(34, 31, 31);
        cursor: pointer;
    }
    .header-lbutton {
        background-color: red;
        color: #ffffff;
        margin-left: 10px;
    }
    .header-lbutton:hover,.header-rbutton:hover {
        opacity: .8;
    }
</style>