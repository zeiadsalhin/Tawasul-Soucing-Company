<script setup>
</script>
<template>
    <swiper :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :effect="'fade'" :navigation="true" :pagination="{
    dynamicBullets: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide><img
                src="https://img.freepik.com/free-psd/flat-design-we-are-hiring-template_23-2149740848.jpg" /></swiper-slide><swiper-slide><img
                src="https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/Template%20Library/Announcement%20Job%20Posting/job-posting-3.jpg"
                loading="lazy" /></swiper-slide><swiper-slide><img
                src="https://media.istockphoto.com/id/1400992799/vector/recruitment-advertising-template-recruitment-poster-job-hiring-poster-social-media-banner.jpg?s=612x612&w=0&k=20&c=D5hBuPyCzahEz_AEyo8QzCuneSWJgz_mgRy8clONKJk="
                loading="lazy" /></swiper-slide>
        <swiper-slide><img src="https://irp.cdn-website.com/58eb511f/dms3rep/multi/Apprentices+Twitter+advert.png"
                loading="lazy" /></swiper-slide>
        <swiper-slide><img src="https://wallpapercave.com/wp/wp7728220.jpg" loading="lazy" /></swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade, Navigation, Pagination],
        };
    },
};
</script>
<style scoped>
.swiper {
    position: relative;
    /* top: 0; */
    z-index: 999;
    /* width: 100%; */
    /* height: fit-content; */
    background-position: center;
    background-size: cover;
    border-radius: 12px;
}

img {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 40vh;
}
</style>
  