<template>
    <div class="detail">
        <div v-html="html"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
    setup(){
        const html = ref(""); 
        onMounted(() => {   
            let str = "<h1> 我是标题 </h1>"
            html.value = str;
        })

        return {
            html
        }
    },
    components:{
        
    }
}
</script>

<style lang="less" scoped>
    .detail{
        padding: 16px;
    }
</style>