<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-x-7">
        <Categories class="max-w-screen-md col-span-1" />
        <Products class="col-span-3" />
      </div>
    </div>
    <Trend />
    <BlogPost />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
// import HeaderSlide from "./components/headerSlide.vue";
import Categories from "./components/categories.vue";
import Products from "./components/products.vue";
import Product from "./components/product.vue";
import Trend from "./components/trend.vue";
import BlogPost from "./components/blogPost.vue";
import Footer from "./components/footer.vue";
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
