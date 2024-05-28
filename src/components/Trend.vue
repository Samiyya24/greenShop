<template>
  <div class="container">
    <div class="flex max-md:flex-col md:justify-between max-md:gap-5 items-start mt-20">
      <div
        v-for="(trend, index) in trend"
        key="index"
        class="flex flex-col md:flex-row md:gap-0 items-center gap-3"
      >
        <img :src="trend.img" class="max-w-48" alt="" />
        <div class="flex flex-col md:items-end md:text-end items-center">
          <h1 class="text-lg font-black uppercase mb-1 max-w-40">
            {{ trend.header }}
          </h1>
          <p class="text-sm text-[#727272] mb-3 max-w-72">{{ trend.info }}</p>
          <button
            class="group w-2/3 hover:bg-[#46A358] border border-[#46A358] hover:text-white text-[#46A358] text-sm font-medium flex items-center gap-2 py-2.5 px-8 rounded-md"
          >
            Find More
            <svg
              class="fill-[#46A358] group-hover:fill-white"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-[#46A358] group-hover:stroke-white"
                d="M14.8126 8.79419H3.56258"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke-[#46A358] group-hover:stroke-white"
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
