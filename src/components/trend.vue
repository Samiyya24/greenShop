<template>
  <div class="container">
    <div class="flex justify-between mt-20">
      <div
        v-for="(trend, index) in trend"
        key="index"
        class="flex items-center"
      >
        <img :src="trend.img" alt="" />
        <div class="text-end">
          <h1 class="text-lg font-black uppercase mb-1 max-w-40 ml-32">
            {{ trend.header }}
          </h1>
          <p class="text-sm text-[#727272] mb-3 max-w-72">{{ trend.info }}</p>
          <button
            class="bg-[#46A358] text-white text-sm font-medium flex itemms-center py-2.5 px-8 rounded-md ml-36"
          >
            Find More
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8126 8.79419H3.56258"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2748 4.27587C10.2748 4.27587 14.8123 6.72162 14.8123 8.79312C14.8123 10.8661 10.2748 13.3126 10.2748 13.3126"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trend: [
        {
          img: "/imgs/product1.png",
          header: "Summer cactus & succulents",
          info: "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
        {
          img: "/imgs/product6.png",
          header: "Styling Trends & much more",
          info: "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
