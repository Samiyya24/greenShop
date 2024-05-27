<script>
export default {
  data() {
    return {
      products: [
        {
          img: "/imgs/product4.png",
          title: "Barberton Daisy",
          price: "$119.00",
        },
        {
          img: "/imgs/product5.png",
          title: "Angel Wing Begonia",
          price: "$169.00",
        },
        {
          img: "/imgs/product6.png",
          title: "African Violet",
          price: "$199.00",
        },
        {
          img: "/imgs/product2.png",
          title: "Beach Spider Lily",
          price: "$129.00",
        },

        {
          img: "/imgs/product1.png",
          title: "Blushing Bromeliad",
          price: "$139.00",
        },
        {
          img: "/imgs/product3.png",
          title: "Aluminum Plant",
          price: "$179.00",
        },
        {
          img: "/imgs/product7.png",
          title: "Bird's Nest Fern",
          price: "$99.00",
        },
        {
          img: "/imgs/product8.png",
          title: "Broadleaf Lady Palm",
          price: "$59.00",
        },
        {
          img: "/imgs/product9.png",
          title: "Chinese Evergreen",
          price: "$39.00",
        },
      ],
    };
  },
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
        <div v-for="(product, index) in products" :key="index" class="group">
          <div class="relative mb-10">
            <span
              v-if="index === 2"
              class="bg-[#46A358] text-white text-base font-medium absolute top-4 py-1 px-2 -left-5"
              >13% OFF</span
            >
            <img
              :src="product.img"
              alt=""
              class="w-full border-t-2 border-white hover:border-green-300 bg-white"
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
          <h2 class="text-base">{{ product.title }}</h2>
          <div class="flex">
            <p class="text-lg font-bold text-[#46A358]">
              {{ product.price }}
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
