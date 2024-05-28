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
            class="bg-[#46A358] text-white md:text-base font-medium absolute top-4 py-1 px-2 -left-5"
            >13% OFF</span
          >
          <img
            :src="product.img"
            alt=""
            class="w-full border-t-2 border-white md:hover:border-green-300 bg-white"
          />
          <div
            class="gap-x-7 absolute md:left-16 md:hidden flex max-md:group-hover:flex"
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
        <h2 class="md:text-base text-sm">{{ product.title }}</h2>
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
  </div>
</template>

<style scoped></style>
