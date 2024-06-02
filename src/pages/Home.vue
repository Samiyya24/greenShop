<script setup>
import { ref } from "vue";
import { useMediaQuery } from "@vueuse/core";
import Categories from "../components/Categories.vue";
import Products from "../components/Products.vue";
import Trend from "../components/Trend.vue";
import BlogPost from "../components/BlogPost.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Login from '../components/Login.vue';
import Slide from '../components/Slide.vue';

const isSidebarOpen = ref(false);
const isLargeScreen = useMediaQuery("(min-width: 768px)");

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <Header :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <div class="container mx-auto">
    <Login v-if="isModal" @close="isModal = false" />
    <Slide />
  </div>
  <div class="container mx-auto mt-16">
    <div class="grid-cols-4 md:grid gap-x-7">
      <Categories
        :is-sidebar-open="isLargeScreen"
        class="max-w-screen-md col-span-1"
      />
      <Products class="col-span-3" />
      <Categories
        :isSidebarOpen="isSidebarOpen"
        class="max-w-screen-md col-span-1"
      />
    </div>
  </div>
  <Trend />
  <BlogPost />
  <Footer />
</template>

<style lang="scss" scoped></style>
