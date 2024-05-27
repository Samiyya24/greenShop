<script>
export default {
  props: {
    product: {
      type: Object,
    },
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
      <div class="group">
        <div class="relative mb-10">
          <span
            v-if="product.sale == true"
            class="bg-[#46A358] text-white text-base font-medium absolute top-4 py-1 px-2 -left-5"
            >13% OFF</span
          >
          <img
            :src="product.img"
            alt=""
            class="w-full border-t-2 border-white hover:border-green-300 bg-white"
          />
          <div class="gap-x-7 absolute left-16 hidden group-hover:flex">
            <img @click="addToCart" src="../../public/icons/cart.svg" alt="" />
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
            v-if="product.sale == true"
            class="text-[#A5A5A5] text-lg font-normal ml-5 line-through"
            >$229.00</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
