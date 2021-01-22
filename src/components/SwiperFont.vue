<template>
    <div class="swiper-font">
        <div class="text">{{ text }}</div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
    setup(){
        onMounted(() => {
            go()
        })

        onUnmounted(()=>{
            clearInterval(timer.value);
        })

        const text = ref('');
        const timer = ref(null);
        const go = ()=>{
            text.value = "";
            let arr = "我不知道将去向何方，但我已经在路上。".split('');
            timer.value = setInterval(()=>{
                text.value += arr[text.value.length];
                if(arr[text.value.length] == undefined){
                    clearInterval(timer.value);
                    setTimeout(go, 3000)
                }
            }, 200)
        }

        return {
            text
        }
    }
}
</script>

<style lang="less" scoped>
    .swiper-font{
        position: absolute;
        top: 200px;
        width: 100%;
        text-align: center;
        font-size: 36px;
        .text{
            --interval: 1s;
            display: block;
            text-shadow: 
                0 0 10px var(--color1),
                0 0 20px var(--color2),
                0 0 40px var(--color3),
                0 0 80px var(--color4);
            will-change: filter, color;
            filter: saturate(60%);
            animation: flicker steps(100) var(--interval) 1s infinite;
            color: lightpink;
            --color1: pink;
            --color2: orangered;
            --color3: red;
            --color4: magenta;
            font-family: Bad Script;
        }
    }

    @keyframes flicker {
        50% {
            color: white;
            filter: saturate(200%) hue-rotate(20deg);
        }
    }
</style>