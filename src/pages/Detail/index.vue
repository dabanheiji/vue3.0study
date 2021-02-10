<template>
    <div class="detail">
        <el-page-header @back="goBack" :content="blog.blog_title">
        </el-page-header>
        <h1 class="blog-title">{{ blog.blog_title }}</h1>
        <div v-html="blog.blog_content" class="blog-content"></div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBlogDetail } from '/@/api/blogs'
export default {
    setup(){
        const router = useRouter();
        const route = useRoute();
        const blog = reactive({}); 
        onMounted(() => { 
            const id = route.params.id;  
            getDetail(id);
        })

        const getDetail = (id)=>{
            getBlogDetail({id}).then(res=>{
                if(res.code === 200){
                    for(let prop in res.data){
                        blog[prop] = res.data[prop];
                    }
                }
            })
        }

        const goBack = ()=>{
            router.go(-1);
        }

        return {
            blog,
            goBack
        }
    },
    components:{
        
    }
}
</script>

<style lang="less" scoped>
    .detail{
        padding: 16px;
        .blog-title{
            padding: 16px;
        }
        .blog-content{
            padding: 16px;
            font-size: 18px;
        }
        
    }
</style>