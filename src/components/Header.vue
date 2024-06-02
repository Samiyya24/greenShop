<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cartCount = computed(() => store.getters.cartCount);

const isModal = ref(false);

const toggle = () => {
  isModal.value = !isModal.value;
};
</script>

<template>
  <header class="sticky top-0 left-0 z-20 w-full">
    <div class="container mx-auto">
      <nav
        class="z-30 flex items-center justify-between py-5 bg-white border-b"
      >
        <button class="md:hidden" @click="$emit('toggle-sidebar')">
          <svg
            v-if="isSidebarOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="46px"
            height="46px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#46A358"
              d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2zm16-7v2H11V6zm0 10v2H11v-2z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="46px"
            height="46px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#46A358"
              d="M19 13H3v-2h16l-4-4l1.4-1.4l6.4 6.4l-6.4 6.4L15 17zM3 6h10v2H3zm10 10v2H3v-2z"
            />
          </svg>
        </button>
        <img src="/icons/greenShopLogo.svg" alt="" />
        <ul class="items-start hidden gap-12 md:flex">
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
          <div class="hidden gap-5 md:flex">
            <img src="/icons/search.svg" alt="" />
            <div class="relative">
              <img src="/icons/cart.svg" alt="" />
              <span
                class="absolute top-0 bg-[#46A358] text-white rounded-full px-1 left-4 text-[10px]"
                >{{ cartCount }}</span
              >
            </div>
          </div>
          <button
            @click="isModal = true"
            class="bg-[#46A358] text-white flex items-center px-4 py-1 gap-1 rounded-lg"
          >
            <img src="/icons/Logout.svg" alt="" />
            Login
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
