<script>
import Login from "./login.vue";
import Slide from "./slide.vue";
import { mapGetters } from "vuex";
export default {
  components: { Slide, Login },
  computed: {
    ...mapGetters(["cartCount"]),
  },
  data() {
    return {
      isModal: false,
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <nav class="flex justify-between items-center py-5 border-b">
      <img src="/public/icons/greenShopLogo.svg" alt="" />
      <ul class="flex items-start gap-12">
        <li>
          <a
            href="#home"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#shop"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Shop</a
          >
        </li>
        <li>
          <a
            href="#plant-care"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Plant Care</a
          >
        </li>
        <li>
          <a
            href="#blogs"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Blogs</a
          >
        </li>
      </ul>
      <div class="flex items-center gap-8">
        <img src="/public/icons/search.svg" alt="" />
        <div class="relative">
          <img src="/public/icons/cart.svg" alt="" />
          <span
            class="absolute top-0 bg-[#46A358] text-white rounded-full px-1 left-4 text-[10px]"
            >{{ cartCount }}</span
          >
        </div>
        <button
          @click="isModal = true"
          class="bg-[#46A358] text-white flex items-center px-4 py-1 gap-1 rounded-lg"
        >
          <img src="/public/icons/Logout.svg" alt="" />
          Login
        </button>
      </div>
    </nav>
    <Login v-if="isModal" @close="isModal = false" />
    <Slide />
  </div>
</template>
