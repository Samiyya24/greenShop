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
  <router-link to="/shop">
    <div class="">
      <div class="group">
        <div class="relative mb-10">
          <span
            v-if="product.sale == true"
            class="bg-[#46A358] text-white md:text-base font-medium absolute top-4 py-1 px-2 -left-5"
            >13% OFF</span
          >
          <img
            :src="product.img"
            alt=""
            class="w-full bg-white border-t-2 border-white md:hover:border-green-300"
          />

          <div
            class="absolute flex gap-x-7 md:hidden md:left-16 md:group-hover:flex"
          >
            <img
              class="max-md:w-2/12"
              @click="addToCart"
              src="/icons/cart.svg"
              alt=""
            />
            <img class="max-md:w-2/12" src="/icons/heart.svg" alt="" />
            <img class="max-md:w-2/12" src="/icons/search.svg" alt="" />
          </div>
        </div>
        <h2 class="text-sm md:text-base">{{ product.title }}</h2>
        <div class="flex items-center max-md:gap-2">
          <p class="md:text-lg text-sm font-bold text-[#46A358]">
            {{ product.price }}
          </p>
          <span
            v-if="product.sale == true"
            class="text-[#A5A5A5] md:text-lg text-sm font-normal md:ml-5 line-through"
            >$229.00</span
          >
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
