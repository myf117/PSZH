<template>
    <div class="ps-child">
        <slot :data='data'></slot>
        <slot name="one">插入部分one</slot>
        <slot name="two">插入部分two</slot>
        <slot>111</slot>
        <slot>222</slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data:{
                name:'zhang',
                age:20
            }
        }
    },
}
</script>
<style scoped>

</style>