<script>
</script>

<template>
  <div class="container mx-auto">
    <nav class="flex justify-between items-center py-8">
      <img src="/public/icons/greenShopLogo.svg" alt="" />
      <ul class="flex items-start gap-12">
        <li>
          <a
            href="#home"
            class="relative px-4 py-2 text-gray-800 after:content-[''] after:absolute after:w-full after:h-1 after:bg-green-500 after:left-0 after:-bottom-5 hover:font-bold after:scale-x-0 hover:after:scale-x-100 transition-transform duration-300 ease-in-out active:after:scale-x-100"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#shop"
            class="relative px-4 py-2 text-gray-800 after:content-[''] after:absolute after:w-full after:h-1 after:bg-green-500 after:left-0 after:-bottom-5 hover:font-bold after:scale-x-0 hover:after:scale-x-100 transition-transform duration-300 ease-in-out"
            >Shop</a
          >
        </li>
        <li>
          <a
            href="#plant-care"
            class="relative px-4 py-2 text-gray-800 after:content-[''] after:absolute after:w-full after:h-1 after:bg-green-500 after:left-0 after:-bottom-5 hover:font-bold after:scale-x-0 hover:after:scale-x-100 transition-transform duration-300 ease-in-out"
            >Plant Care</a
          >
        </li>
        <li>
          <a
            href="#blogs"
            class="relative px-4 py-2 text-gray-800 after:content-[''] after:absolute after:w-full after:h-1 after:bg-green-500 after:left-0 after:-bottom-5 hover:font-bold after:scale-x-0 hover:after:scale-x-100 transition-transform duration-300 ease-in-out"
            >Blogs</a
          >
        </li>
      </ul>
      <div class="flex gap-8">
        <img src="/public/icons/search.svg" alt="" />
        <img src="/public/icons/cart.svg" alt="" />
        <button
          class="bg-[#46A358] text-white flex items-center px-4 py-1 gap-1 rounded-lg"
        >
          <img src="/public/icons/Logout.svg" alt="" />
          Login
        </button>
      </div>
    </nav>
</div>
<HeaderSlide></HeaderSlide>
</template>
