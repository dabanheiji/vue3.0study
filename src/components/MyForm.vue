<template>
    <el-form
        label-position="left"
        label-width="60px"
    >
        <el-form-item
            v-for="(item, index) in formlist"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :rules="item.rules"
        >
            <el-input v-model="myParams[item.prop]"></el-input>
        </el-form-item>
        <div>
            <el-button
                type="primary"
                @click="submitForm"
            >登录</el-button>
        </div>
    </el-form>
</template>

<script>
import { reactive } from 'vue';
export default {
    props:{
        formlist:{
            type: Array,
            default: []
        },
        params:Object
    },
    setup(props, { emit }){
        const myParams = reactive({})
        const submitForm = ()=>{
            emit('my-submit', myParams)
        }

        return {
            myParams,
            submitForm
        }
    }
}
</script>