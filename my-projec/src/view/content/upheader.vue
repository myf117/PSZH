<template>
    <div class="ps-upheader">
            <input type="file" class="input-file" @change="getSrc">
            <img :src="img_src" class="ps-header-img">
    </div>
</template>
<script>
import img_src from '../../public/img/壁纸1.jpg'
export default {
    data() {
        return {
            img_src:img_src,//设置一个默认头像
        }
    },
    props:{
        options:{
            type:Object
        }
    },
    mounted() {
        this.checkSrc();//从数据库获取到用户的头像信息
    },
    methods: {
        checkSrc(){},
        getSrc(e){
            let file = e.target.files[0];
            let formData = new FormData();
            formData.append("uploadFile", file, file.name);
            const config = {
                headers: {
                "Content-Type":
                    "multipart/form-data;boundary=" + new Date().getTime(),
                },
            };
            let fType = file.name.substring(
                file.name.lastIndexOf(".") + 1
            );
            if (
                fType == "jpg" ||
                fType == "png" ||
                fType == "jpeg" ||
                fType == "JPG"
            ) {
                let size = file.size / 1024 / 1024;
                if (size > 4) {
                    alert("文件不能超过4M");
                    return false;
                }
                //第一种：返回上传文件的base64编码
                var reader = new FileReader(); 
                reader.onload = (e) => {
                    //  console.log(e.target.result)
                     this.img_src = e.target.result;
                }
                //一定要写这句，正式读取文件
                reader.readAsDataURL(file);  
                // 第二种，从后台返回上传文件的地址
                // this.$http.post('/uploadFile',formData, config)
                // .then(res => {
                //     console.log(res.data);
                //     this.img_src = res.data;
                // }).catch(err => {
                //     console.log(err)
                // })
            } else {
                alert("文件格式不正确");
                return false;
            }
        }
    }
}
</script>
<style scoped>
    .ps-upheader {
        width: 100px;
        height: 100px;
        position: relative;
    }
    .ps-header-img {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #ccc;
        outline: none;
        overflow: hidden;
    }
    .input-file {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }
</style>