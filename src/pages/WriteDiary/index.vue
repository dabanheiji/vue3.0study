<template>
    <div class="write-diary">
        <my-form
            :formlist="wtiteBlogForm"
            :params="blog"
            @my-submit="publishBlog"
            btnText="发布"
            btnPosition="right"
        ></my-form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { wtiteBlogForm } from '../../utils/form';
import MyForm from '../../components/MyForm.vue';
import { writeBlogs } from '../../api/blogs';
export default {
    setup(){
        const router = useRouter();
        const blog = reactive({});
        const publishBlog = (values) => {
            writeBlogs(values).then(res => {
                if(res.code === 200){
                    router.push('/diarylist');
                }
            });
        }

        return {
            blog,
            wtiteBlogForm,
            publishBlog
        }
    },
    components:{
        MyForm,
    }
}
</script>

<style lang="less" scoped>

</style>