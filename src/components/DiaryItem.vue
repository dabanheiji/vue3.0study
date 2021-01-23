<template>
    <div class="diary-item">
        <div class="diary-item-body" @click="myClick">
            <h1>标题</h1>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['data'],
    setup(props, { emit }){
        const {data} = props;
        const myClick = ()=>{
            emit('myclick', data)
        }

        return {
            myClick
        }
    }
}
</script>

<style lang="less" scoped>
    .diary-item{
        display: inline-grid;
        height: 100px;
        padding: 8px;
        .diary-item-body{
            cursor: pointer;
            background-color: #1fc512;
        }
    }
</style>