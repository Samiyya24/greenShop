<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-x-7">
        <Categories class="max-w-screen-md col-span-1 max-md:hidden" />
        <Products class="col-span-3" />
      </div>
    </div>
    <Trend />
    <BlogPost />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import HeaderSlide from "./components/headerSlide.vue";
import Categories from "./components/Categories.vue";
import Products from "./components/Products.vue";
import Product from "./components/Product.vue";
import Trend from "./components/Trend.vue";
import BlogPost from "./components/BlogPost.vue";
import Footer from "./components/Footer.vue";
// import Intro from "./components/Intro.vue";
export default {
  components: {
    Header,
    // HeaderSlide,
    Categories,
    Products,
    Product,
    Trend,
    BlogPost,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
