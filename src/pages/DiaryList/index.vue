<template>
    <div class="diary">
        <h1>大阪黑鸡的文章</h1>
        <div class="list">
            <diary-item
                v-for="item in 10"
                :key="item"
                :data="item"
                @myclick="goPage"
            />
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import DiaryItem from '../../components/DiaryItem.vue'
export default {
    setup(){
        const router = useRouter();
        const goPage = (id) => {
            router.push(`/detail/${id}`)
        }

        return {
            goPage
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
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
        }
    }
</style>