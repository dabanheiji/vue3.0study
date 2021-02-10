<template>
    <div class="diary-item">
        <div class="diary-item-body" @click="myClick">
            <h1 class="diary-title">
                <a
                    class="fl"
                >{{ data.blog_title }}</a>
                <p
                    class="fr"
                >{{ data.create_date }}</p>
            </h1>
        </div>
        <el-divider
            :style="{margin: 4}"
        ></el-divider>
    </div>
</template>

<script>
export default {
    props:['data'],
    setup(props, { emit }){
        const {data} = props;
        
        const myClick = ()=>{
            emit('myclick', data.blog_id)
        }

        return {
            myClick
        }
    }
}
</script>

<style lang="less" scoped>
    .diary-item{
        // height: 100px;
        padding: 8px;
        line-height: 48px;
        .diary-item-body{
            cursor: pointer;
            width: 100%;
             overflow: hidden;
            // background-color: #1890ff;
            &:hover{
                background-color: #f5f5f5;
            }
            .diary-title{
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>