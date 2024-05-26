<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper">
    <swiper-slide>
          <!-- <div v-for="i in 3" key="i"> -->
        <div class="flex items-center">
          <div>
            <p>{{ header }}</p>
            <h1>{{ sub }}</h1>
            <p>{{ info }}</p>
            <button>SHOP NOW</button>
          </div>
          <img :src="img" />
        </div>
    <!-- </div> -->
      </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      img: "/imgs/MainBanner.png",
      header: "Welcome to GreenShop",
      sub: "Let’s Make a Better <span>Planet",
      info: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    };
  },
};
</script>

<style>
#app {
  height: 100%;
}
/* html,
body {
  position: relative;
  height: 100%;
} */

body {
  /* background: #eee; */
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>