<script>
import Product from "./Product.vue";

export default {
  data() {
    return {
      products: [
        // Ma'lumotlar ro'yxati
        {
          img: "/imgs/product4.png",
          title: "Barberton Daisy",
          price: "$119.00",
          sale: false,
        },
        {
          img: "/imgs/product5.png",
          title: "Angel Wing Begonia",
          price: "$169.00",
          sale: false,
        },
        {
          img: "/imgs/product6.png",
          title: "African Violet",
          price: "$199.00",
          sale: true,
        },
        {
          img: "/imgs/product2.png",
          title: "Beach Spider Lily",
          price: "$129.00",
          sale: false,
        },
        {
          img: "/imgs/product1.png",
          title: "Blushing Bromeliad",
          price: "$139.00",
          sale: false,
        },
        {
          img: "/imgs/product3.png",
          title: "Aluminum Plant",
          price: "$179.00",
          sale: false,
        },
        {
          img: "/imgs/product7.png",
          title: "Bird's Nest Fern",
          price: "$99.00",
          sale: false,
        },
        {
          img: "/imgs/product8.png",
          title: "Broadleaf Lady Palm",
          price: "$59.00",
          sale: false,
        },
        {
          img: "/imgs/product9.png",
          title: "Chinese Evergreen",
          price: "$39.00",
          sale: false,
        },
      ],
      filteredProducts: [], // Boshida bo'sh array
      showAll: true, // Boshida barcha mahsulotlarni ko'rsatish
      showName: false,
    };
  },
  components: {
    Product,
  },
  methods: {
    showAllProducts() {
      this.showAll = true;
    },
    showSaleProducts() {
      this.showAll = false;
    },
    showFilterName() {
      this.showName = true;
    },
  },
  computed: {
    productsToDisplay() {
      if (this.showAll) {
        return this.products;
      } else if (this.showName) {
        return this.products.sort((a, b) => a - b);
      } else {
        return this.products.filter((product) => product.sale);
      }
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-10">
      <div class="gap-20">
        <button
          @click="showAllProducts"
          class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
        >
          All Plants
        </button>
        <button
          class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
        >
          New Arrivals
        </button>
        <button
          @click="showSaleProducts"
          class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
        >
          Sale
        </button>
      </div>
      <div class="hidden md:flex gap-3">
        <p>Sort by:</p>
        <select id="cars" class="focus:outline-none">
          <option value="name">All</option>
          <option value="name">Name</option>
          <option value="price" @click="showFilterName">Price</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      <Product
        v-for="(product, index) in productsToDisplay"
        :key="index"
        :product="product"
      />
    </div>
    <div class="mt-20 flex justify-end gap-2.5">
      <button
        class="px-2.5 border hover:text-white focus:text-white border-[#E5E5E5] text-lg hover:font-bold hover:bg-[#46A358] focus:bg-[#46A358] rounded-md"
      >
        1
      </button>
      <button
        class="px-2.5 border hover:text-white focus:text-white border-[#E5E5E5] text-lg hover:font-bold hover:bg-[#46A358] focus:bg-[#46A358] rounded-md"
      >
        2
      </button>
      <button
        class="px-2.5 border hover:text-white focus:text-white border-[#E5E5E5] text-lg hover:font-bold hover:bg-[#46A358] focus:bg-[#46A358] rounded-md"
      >
        3
      </button>
      <button
        class="px-2.5 border hover:text-white focus:text-white border-[#E5E5E5] text-lg hover:font-bold hover:bg-[#46A358] focus:bg-[#46A358] rounded-md"
      >
        4
      </button>
      <button
        class="p-2.5 border hover:text-white focus:text-white border-[#E5E5E5] text-lg hover:font-bold hover:bg-[#46A358] focus:bg-[#46A358] rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
