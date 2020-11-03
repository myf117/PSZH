<template>
    <div class="crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in itemArr" :key="item.id">{{item.menuName}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{options.item1}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{options.item2}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemArr:[],
            index:0
        }
    },
    props:{
        options:{
            type:Object
        }
    },
    methods: {
        getItems(){
            for(key in this.options){
                let obj = {};
                if(key.match(/item/g)){
                    obj.menuName = this.options[key];
                    obj.id = this.index;
                    ++this.index;
                }
            }
        }
    },
    mounted(){
        this.getItems();
        console.log(this.itemArr)
    }
}
</script>
<style scoped>
    .crumb {
        height: 50px;
        position: fixed;
        top: 80px;
        background: rgba(255, 255, 255, 0);
        cursor: pointer;
        left: 250px;
        padding-left: 30px;
    }
</style>