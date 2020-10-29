<template>
    <div>
        <mavon-editor v-model="content" :toolbars="toolbars" @save='saveFile'  @imgAdd="handleEditorImgAdd"
     @imgDel="handleEditorImgDel" ref="md" :ishljs='true' /><!--@change="saveFile"-->
        <div v-html="readmeContent" ></div>
    </div>
</template>
<script>
import marked from 'marked'
export default {
    data() {
        return {
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                ink: true, // 链接
                imagelink: true, // 图片链接
                help: true, // 帮助
                code: true, // code
                subfield: true, // 是否需要分栏
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                link: true, // 链接
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
            },
            content:'',
            readmeContent:'',
            imgArr:[],
            result:null,
            timer1:null,
            timer2:null,
            fileName:'your',
            flag:false
        }
    },  
    methods: {
        savePost(params){
            if(params.fileName.indexOf('.md') == -1){
                params.fileName = params.fileName + '.md';
            }
            // 将文件名和内容传递到后台，由后台生成文件并保存在数据库
            this.$http.post('',params).then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        },
        // 节流函数使用定时器第一次不会执行，时间戳加定时器第一次会执行
        save(val,render,delay){
            console.log('1',val,render)
            this.timer2 = null;          
            return () => {             
                if (!this.timer2) {   
                    console.log('2',val,render) 
                    this.saveTips(val,render);              
                    this.timer2 = setTimeout(() => {   
                         console.log('3',val,render)            
                        this.timer2 = null;                    
                    }, delay);                
                }            
            }        
        },
        saveFile(val,render){
            this.saveTips(val,render)
        },
        saveTips(val,render){
            if(this.fileName == 'your'){
                this.$prompt('请输入文件名', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(({ value }) => {
                    let time = this.getTime();
                    this.fileName = value || 'your' + '.md';
                    let postObj = {
                        fileName:this.fileName,
                        value:this.val
                    }
                    // this.savePost(postObj);
                    this.$message({
                        type: 'success',
                        message: (value || 'your') + '.md在' + time + '已保存'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消'
                    });       
                });
            }else {
                let time = this.getTime();
                let postObj = {
                        fileName:this.fileName,
                        value:this.val
                }
                // this.savePost(postObj);
                this.$message({
                        type: 'success',
                        message: (this.fileName || 'your') + '.md在' + time + '已保存'
                });
            }
        },
        
        handleEditorImgAdd(pos, $file) {
                let formdata = new FormData();
                formdata.append('imgFile',$file)
                let postobj = {
                    formdata:formdata
                };
                this.imgArr[Number(pos-1)] = $file
                console.log(this.content);
                // this.uploadImg(pos,postobj);
        },
        handleEditorImgDel(pos){
            delete this.imgArr[pos-1]
        },
        getTime(){
            let date = new Date();
            let time =  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            return time
        },
        uploadImg(pos,obj){
            // 讲图片上传到数据库保存
            this.$http.post('',obj).then(res => {
                this.result = res.data;
                $refs.md.$img2Url(pos, res)
            }).catch(er => {
                this.$message({
                    type:'error',
                    message:'上传文件出错'
                });
                console.log(err);
            })
        },
        
    },
    mounted() {
    },
    computed: {
        
    },
    beforeDestroy(){
        this.timer1 = null;
    }
}
</script>
<style scoped>

</style>