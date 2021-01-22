<template>
  <div>
    <my-nav
      :list="navList"
      @select="selectNav"
    />
    <div class="bg">
      <swiper-font/>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import MyNav from './components/MyNav.vue';
import SwiperFont from './components/SwiperFont.vue'
export default {
  name: 'App',
  setup(){
    const router = useRouter();

    const navList = reactive([
      { path:'/', label:'首页' },
      { path:'/about', label:'关于' }
    ]);

    const selectNav = (path)=>{
      router.push(path);
    }


    return {
      navList,
      selectNav
    }
  },
  components: {
    MyNav,
    SwiperFont
  }
}
</script>

<style lang="less" scoped>
  .bg{
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 720px;
    background-image: url('./assets/bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .body{
    position: absolute;
    top: 400px;
    left: 0;
    right: 0;
    width: 1200px;
    min-height: 500px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 0 10px #999;
  }
</style>