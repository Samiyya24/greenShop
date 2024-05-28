<script>
export default {
  data() {
    return {
      categories: [
        { name: "House Plants", count: 33 },
        { name: "Potter Plants", count: 12 },
        { name: "Seeds", count: 65 },
        { name: "Small Plants", count: 39 },
        { name: "Big Plants", count: 23 },
        { name: "Succulents", count: 17 },
        { name: "Trerrariums", count: 19 },
        { name: "Gardening", count: 13 },
        { name: "Accessories", count: 18 },
      ],
      size: [
        { name: "Small", count: 119 },
        { name: "Medium", count: 86 },
        { name: "Large", count: 78 },
      ],
    };
  },
};
</script>
<template>
  <div class="items-center text-left max-w-sm px-10">
    <div class="py-3">
      <h3 class="text-[18px] font-bold py-3">Categories</h3>
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="group flex justify-between ml-3 gap-5 py-[10px] leading-8"
      >
        <a class="group-hover:font-bold group-hover:text-[#46A358]" href="#">{{
          category.name
        }}</a>
        <p class="group-hover:font-bold group-hover:text-[#46A358]">
          ({{ category.count }})
        </p>
      </div>
    </div>
    <div class="mb-6">
      <h1 class="mb-5 text-lg font-bold">Price Range</h1>
      <input
        id="small-range"
        type="range"
        value="50"
        class="h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-200"
      />
      <p class="mb-5">
        Price: <span class="text-[#46A358] font-semibold">$39 - $1230</span>
      </p>
      <button
        class="hover:bg-[#46A358] border border-[#46A358] hover:text-white text-[#46A358] flex items-center px-4 py-1 gap-1 rounded-lg font-bold"
      >
        Filter
      </button>
    </div>
    <span class="text-lg font-bold">Size</span>
    <div
      v-for="(size, index) in size"
      :key="index"
      class="group leading-8 flex justify-between ml-3 gap-5 py-[10px]"
    >
      <a class="group-hover:font-bold group-hover:text-[#46A358]" href="#">{{
        size.name
      }}</a>
      <p class="group-hover:font-bold group-hover:text-[#46A358]">
        ({{ size.count }})
      </p>
    </div>
    <img class="mt-16" src="/imgs/SuperSaleBanner.png" alt="" />
  </div>
</template>
<style></style>
