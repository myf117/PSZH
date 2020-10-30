<template>
    <div class="header-sbox">
        <input type="text" class="header-search" placeholder="请输入关键字">
        <span class="iconfont header-sbox-icon">&#xe636;</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
    .header-sbox {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.5px solid #ffffff;
        border-radius: 5px;
    }
    .header-search {
        width: 100%;
        height: 80%;
        outline: none;
        border: none;
        background-color: #545c64;
        padding-left: 20px;
    }
    .header-sbox-icon {
        font-size: 22px;
        width: 50px;
    }
</style>