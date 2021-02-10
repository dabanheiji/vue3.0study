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
            <el-input 
                v-if="item.component === 'input'"
                v-model="myParams[item.prop]"
                :placeholder="item.placeholder"
                :show-password="item.showPassword ? true : false"
                :type="item.type ? item.type : ''"
            ></el-input>
            <my-editor
                v-else-if="item.component === 'editor'"
                @my-change="myParams[item.prop] = $event"
            ></my-editor>
        </el-form-item>
        <div class="clear">
            <el-button
                type="primary"
                @click="submitForm"
                :style="{float: btnPosition}"
            >{{btnText}}</el-button>
        </div>
    </el-form>
</template>

<script>
import { reactive } from 'vue';
import MyEditor from './MyEditor.vue';
export default {
    props:{
        formlist:{
            type: Array,
            default: []
        },
        params:Object,
        btnText:{
            type:String,
            default:'登录'
        },
        btnPosition:{
            type:String,
            default:'center'
        }
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
    },
    components:{
        MyEditor
    }
}
</script>