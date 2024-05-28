<template>
  <div class="container mx-auto mt-28">
    <div class="grid grid-cols-2 max-md:gap-4 md:grid-cols-4 py-5">
      <div class="">
        <img src="/icons/img1.svg" alt="" />
        <h2 class="text-lg font-bold">Garden Care</h2>
        <p class="text-[#727272] text-sm max-w-52">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div class="">
        <img src="/icons/img2.svg" alt="" />
        <h2 class="text-lg font-bold">Plant Renovation</h2>
        <p class="text-[#727272] text-sm max-w-52">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div
        class="max-md:col-span-2 max-md:flex max-md:flex-col items-center max-md:text-center"
      >
        <img src="/icons/img3.svg" alt="" />
        <h2 class="text-lg font-bold">Watering Graden</h2>
        <p class="text-[#727272] text-sm max-w-52">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div class="max-md:col-span-2 md:max-w-96">
        <h1 class="text-lg font-bold mb-2">
          Would you like to join newsletters?
        </h1>
        <form class="flex mb-3">
          <input
            type="email"
            placeholder="enter your email address..."
            class="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            class="bg-green-500 text-white p-3 rounded-r-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Join
          </button>
        </form>
        <p class="text-xs text-[#727272] max-w-[310px] leading-5">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  </div>
  <FooterAddress />
  <FooterUrl />
</template>

<script>
import FooterAddress from "./FooterAddress.vue";
import FooterUrl from "./FooterUrl.vue";

export default {
  components: { FooterAddress, FooterUrl },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
