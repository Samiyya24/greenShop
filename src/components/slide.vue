<template>
  <swiper-container class="my-8">
    <swiper-slide class="flex items-center justify-between bg-gray-100 p-6">
      <div class="flex items-center">
        <div class="">
          <p
            class="text-sm uppercase tracking-widest font-medium text-[#3D3D3D]"
          >
            Welcome to GreenShop
          </p>
          <h1 class="text-7xl font-bold text-gray-900 my-4 max-w-[500px]">
            Let’s Make a Better <span class="text-[#46A358]">Planet</span>
          </h1>
          <p class="text-[#727272] mb-4 max-w-[620px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            SHOP NOW
          </button>
        </div>
        <img src="/imgs/MainBanner.png" alt="Main Banner" class="w-1/2 o" />
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center justify-between bg-gray-100 p-6">
      <div class="flex items-center">
        <div class="">
          <p
            class="text-sm uppercase tracking-widest font-medium text-[#3D3D3D]"
          >
            Welcome to GreenShop
          </p>
          <h1 class="text-7xl font-bold text-gray-900 my-4 max-w-[500px]">
            Let’s Make a Better <span class="text-[#46A358]">Planet</span>
          </h1>
          <p class="text-[#727272] mb-4 max-w-[620px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            SHOP NOW
          </button>
        </div>
        <img src="/imgs/MainBanner.png" alt="Main Banner" class="w-1/2 o" />
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center justify-between bg-gray-100 p-6">
      <div class="flex items-center">
        <div class="">
          <p
            class="text-sm uppercase tracking-widest font-medium text-[#3D3D3D]"
          >
            Welcome to GreenShop
          </p>
          <h1 class="text-7xl font-bold text-gray-900 my-4 max-w-[500px]">
            Let’s Make a Better <span class="text-[#46A358]">Planet</span>
          </h1>
          <p class="text-[#727272] mb-4 max-w-[620px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            SHOP NOW
          </button>
        </div>
        <img src="/imgs/MainBanner.png" alt="Main Banner" class="w-1/2 o" />
      </div>
    </swiper-slide>
  </swiper-container>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    SwiperContainer: Swiper,
    SwiperSlide: SwiperSlide,
  },
};
</script>
<style lang="scss" scoped>
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
