<template>
    <div class="diary">
        <h1>大阪黑鸡的文章</h1>
        <div class="list">
            <diary-item
                v-for="(item,index) in diaryList"
                :key="index"
                :data="item"
                @myclick="goPage"
            />
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DiaryItem from '../../components/DiaryItem.vue';
import { getBlogs } from '/@/api/blogs'
export default {
    setup(){
        const router = useRouter();
        onMounted(() => {
            getDiaryList();
        })

        const diaryList = reactive([]);
        const getDiaryList = ()=>{
            getBlogs().then(res => {
                diaryList.push(...res.data);
            })
        }

        const goPage = (id) => {
            router.push(`/detail/${id}`)
        }

        return {
            goPage,
            diaryList
        }
    },
    components:{
        DiaryItem
    }
}
</script>

<style lang="less" scoped>
    .diary{
        margin: 16px;
        padding: 16px;
        text-align: center;
        .list{
            // display: grid;
            // grid-template-columns: 25% 25% 25% 25%;
        }
    }
</style>