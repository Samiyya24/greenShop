<script>
export default {
  data() {
    return {
      images: [
        "/imgs/product4.png",
        "/imgs/product5.png",
        "/imgs/product6.png",
        "/imgs/product2.png",
        "/imgs/product1.png",
        "/imgs/product3.png",
        "/imgs/product7.png",
        "/imgs/product8.png",
        "/imgs/product9.png",
      ],
      productName: [
        "Barberton Daisy",
        "Angel Wing Begonia",
        "African Violet",
        "Beach Spider Lily",
        "Blushing Bromeliad",
        "Aluminum Plant",
        "Bird's Nest Fern",
        "Broadleaf Lady Palm",
        "Chinese Evergreen",
      ],
      productPrice: [
        "$119.00",
        "$169.00",
        "$199.00",
        "$129.00",
        "$139.00",
        "$179.00",
        "$99.00",
        "$59.00",
        "$39.00",
      ],
    };
  },
  //   const toggle = () => {
  //   show.value = !show.value;
  // };
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart");
    },
  },
};
</script>

<template>
  <div>
    <div class="">
      <div class="grid grid-cols-3 gap-8">
        <div v-for="(name, index) in productName" :key="index" class="group">
          <div class="bg:[#FBFBFB] relative mb-10">
            <span
              v-if="index === 2"
              class="bg-[#46A358] text-white text-base font-medium absolute top-4 py-1 px-2 -left-5"
              >13% OFF</span
            >
            <img
              :src="images[index]"
              alt=""
              class="w-full hover:border-t-2 border-green-300 bg-white"
            />
            <div class="gap-x-7 absolute left-16 hidden group-hover:flex">
              <img
                @click="addToCart"
                src="../../public/icons/cart.svg"
                alt=""
              />
              <img src="../../public/icons/heart.svg" alt="" />
              <img src="../../public/icons/search.svg" alt="" />
            </div>
          </div>
          <h2 class="text-base">{{ name }}</h2>
          <div class="flex">
            <p class="text-lg font-bold text-[#46A358]">
              {{ productPrice[index] }}
            </p>
            <span
              v-if="index === 2"
              class="text-[#A5A5A5] text-lg font-normal ml-5 line-through"
              >$229.00</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
