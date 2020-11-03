<template>
    <div class="show-file">
        <!-- <crumb :options='obj'></crumb> -->
        <div v-html="testmd" class="file"></div>
        <div class="right-nav">
            <div v-for="item in nodeListArr" :key="item.id">
                <a :href="item.id">{{item.text}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import '../../../public/css/scrollbar.css'
import testmd from '../../../public/md/test.md'
import '../../../public/css/markdown.css'
export default {
    data() {
        return {
            fileName:'',
            testmd:this.md2html(testmd),
            nodeListArr:[],
            obj:{}
        }
    },
    props:{
        options:{
            type:Object
        }
    },
    methods: {
        getChapter(){
            // let content = document.getElementsByClassName('right-nav')[0]
            let h2 = document.getElementsByTagName('h2');
            // content.style.height = `30*${h2.length}px`
            for(let i = 0; i < h2.length; i++){
                h2[i].id = `h2-${i}`;
                let obj = {};
                obj.id = `#${h2[i].id}`;
                obj.text = h2[i].innerHTML;
                this.nodeListArr.push(obj);
            }
        },
        getFile(){
            this.$http.get('',{
                params:{
                    menuName:this.options.menuName
                }
            }).then(res => {
                this.testmd = this.md2html(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getChapter();
        // this.getFile();
        console.log(this.options)
        this.obj.item1 = this.options.item1;
        this.obj.item2 = this.options.item2
    },
}
</script>
<style scoped>
    .show-file {
        text-align: left;
        /* width: 90%; */
        padding-left: 30px;
        display: flex;
        justify-content: space-around;
    }
    .file {
        width: 70%;
        height: 95vh;
        overflow: scroll;
        scrollbar-arrow-color: rosybrown;
    }
    .right-nav {
        width: 150px;
        margin-top: 50px;
    }
    .right-nav > div {
        margin: 5px 0;
        width: 100%;
        height: 30px;
        text-align: center;
    }
    .right-nav > div > a {
        display: inline-block;
        color: black;
        font-weight: 400;
    }
    
</style>