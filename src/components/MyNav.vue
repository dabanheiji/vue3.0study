<template>
   <div class="mynav">
        <div class="nav">
            <div v-for="(item, index) in list" :key="index" class="nav-item" @click="myClick(item)">
                {{ item.label }}
            </div>
        </div>
   </div>
</template>

<script>
export default {
    props:['list'],
    setup(props, { emit }){
        const { list } = props;
        const myClick = (data)=>{
            emit('select', data.path)
        }

        return {
            list,
            myClick
        }
    }
}
</script>

<style lang="less" scoped>
    .mynav{
        position: absolute;
        width: 100%;
        min-width: 1200px;
        height: 60px;
        &:hover .nav{
            height: 80px;
            line-height: 60px;
        }
        .nav{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 0px;
            color: #ffffff;
            line-height: 0px;
            overflow: hidden;
            padding: 0 300px;
            background-image: linear-gradient(180deg,rgba(0,0,0,.5) 0%, transparent 100%);
            transition: all .2s;
            .nav-item{
                display: inline-block;
                padding: 0 20px;
                cursor: pointer;
            }
        }
    }
</style>