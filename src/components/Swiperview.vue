<script setup>
</script>
<template>
    <div class="swi">
        <swiper :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
        }" :effect="'fade'" :navigation="false" :modules="modules" class="mySwiper">
            <swiper-slide><img src="https://wallpapercave.com/wp/wp7728113.jpg" /></swiper-slide><swiper-slide><img
                    src="https://wallpapercave.com/wp/wp7728127.jpg" loading="lazy" /></swiper-slide><swiper-slide><img
                    src="https://wallpapercave.com/wp/wp7728194.jpg" loading="lazy" /></swiper-slide><swiper-slide><img
                    src="https://wallpapercave.com/wp/wp7728220.jpg" loading="lazy" /></swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade, Navigation],
        };
    },
};
</script>
<style scoped>
.swiper {
    position: absolute;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

img {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
  