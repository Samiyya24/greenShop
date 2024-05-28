<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="3"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import Intro from "./Intro.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// const modules = ref([Pagination, ]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Intro,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    };
  },
};
</script>
<style>
@import "swiper/swiper-bundle.css";

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
