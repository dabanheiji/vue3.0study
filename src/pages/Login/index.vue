<template>
    <div class="login">
        <h1 class="title">尊敬的大阪黑鸡！欢迎回来。</h1>
        <el-card shadow="always" class="login-card">
            <template #header>
                <h2>欢迎登录</h2>
            </template>
            <my-form
                :formlist="formlist"
                @my-submit="submit"
            ></my-form>
        </el-card>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus'
import MyForm from '../../components/MyForm.vue';
import { loginForm } from '../../utils/form';
import { Login } from '../../api/user';
export default {
    setup(){
        const router = useRouter();
        const route = useRoute();
        const formlist = reactive(loginForm);
        const submit = (params)=>{
            Login(params).then(res => {
                if(res.code === 200){
                    sessionStorage.setItem('token', res.token);
                    let redirect = route.query.redirect;
                    if(redirect){
                        router.replace(redirect);
                    }else{
                        router.replace('/');
                    }
                }else{
                    ElMessage.error({
                        message: res.message
                    })
                }
            })
        }

        return {
            formlist,
            submit
        }
    },
    components:{
        MyForm
    }
}
</script>

<style lang="less" scoped>
    .login{
        .title{
            margin: 20px auto;
            text-align: center;
        }
        .login-card{
            width: 400px;
            margin: 0 auto;
            text-align: center;
        }
    }
</style>