<template>
    <div class="ps-father">

        <testscope>
            <div>333</div>
            <!-- 依次序替换无名插槽 -->
            <p slot="one">张嘎嘎嘎</p>
                <!-- 插槽内容会被替换 -->
            <div slot="two">李嘎嘎嘎</div>
        </testscope>
        
    </div>
</template>
<script>
import testscope from './testscope'
export default {
    components:{
        testscope
    }
}
</script>
<style scoped>

</style>