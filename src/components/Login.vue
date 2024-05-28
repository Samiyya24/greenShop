<template>
  <div
    @click="closeModal"
    class="bg-black/40 fixed top-0 left-0 w-full h-screen z-10"
  ></div>
  <div
    class="fixed md:top-1/2 md:left-1/2 z-20 rounded-xl md:-translate-x-1/2 md:-translate-y-1/2 bg-white border-b-8 border-b-[#46A358] md:py-10 md:px-28 px-2 py-3"
  >
    <div class="flex justify-end absolute top-5 right-5">
      <button @click="closeModal">
        <svg
          class="mb-5"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.170067 0.170067C0.396823 -0.056689 0.764467 -0.056689 0.991223 0.170067L6 5.17884L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82116 6L11.8299 11.0088C12.0567 11.2355 12.0567 11.6032 11.8299 11.8299C11.6032 12.0567 11.2355 12.0567 11.0088 11.8299L6 6.82116L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17884 6L0.170067 0.991223C-0.056689 0.764467 -0.056689 0.396823 0.170067 0.170067Z"
            fill="#46A358"
          />
        </svg>
      </button>
    </div>
    <div class="divide-x text-center md:mb-10 mb-3">
      <button
        @click="content = 'login'"
        class="md:px-5 px-2 text-xl font-medium focus:text-[#46A358]"
      >
        Login
      </button>
      <button
        @click="content = 'register'"
        class="md:px-5 px-2 text-xl font-medium focus:text-[#46A358]"
      >
        Register
      </button>
    </div>
    <!-- ==============================LOGIN============================ -->
    <div v-if="content == 'login'">
      <p class="text-[#3D3D3D] text-sm mb-3">
        Enter your username and password to login.
      </p>
      <form action="/" class="flex flex-col relative mb-12">
        <input
          class="border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
          type="email"
          placeholder="almamun_uxui@outlook.com"
        />
        <!-- <div class="max-w-full"> -->
        <div class="w-full relative">
          <input
            class="w-full border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
            :type="show ? 'text' : 'password'"
            placeholder="Password"
          />
          <button
            v-if="!show"
            @click="showPassword"
            class="absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path
                  d="M5.45 16.92a10.78 10.78 0 0 1-2.55-3.71a1.85 1.85 0 0 1 0-1.46A10.59 10.59 0 0 1 6.62 7.1A9 9 0 0 1 12 5.48a8.81 8.81 0 0 1 4 .85m2.56 1.72a10.85 10.85 0 0 1 2.54 3.7a1.85 1.85 0 0 1 0 1.46a10.59 10.59 0 0 1-3.72 4.65A9 9 0 0 1 12 19.48a8.81 8.81 0 0 1-4-.85"
                />
                <path
                  d="M8.71 13.65a3.28 3.28 0 0 1-.21-1.17a3.5 3.5 0 0 1 3.5-3.5c.4-.002.796.07 1.17.21m2.12 2.12c.14.374.212.77.21 1.17a3.5 3.5 0 0 1-3.5 3.5a3.28 3.28 0 0 1-1.17-.21M3 20L19 4"
                />
              </g>
            </svg>
          </button>
          <button v-else @click="showPassword" class="absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"
              />
            </svg>
          </button>
        </div>
        <!-- <svg
        class="absolute top-20 right-3"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"
        />
      </svg> -->
        <!-- </div> -->
        <a class="text-sm text-[#46A358] text-end mb-7" href="#"
          >Forgot Password?</a
        >
        <button
          class="bg-[#46A358] text-white text-base font-bold py-4 rounded-lg"
        >
          Login
        </button>
      </form>
      <div class="flex items-center gap-3 text-[#3D3D3D] justify-center mb-10">
        <div class="w-28 border"></div>
        <span class="text-sm">Or login with</span>
        <div class="w-28 border"></div>
      </div>
      <div class="flex flex-col justify-center">
        <button class="border py-3 px-20 px-full flex items-center gap-3 mb-5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
              fill="#59C36A"
            />
            <path
              d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
              fill="#00A66C"
            />
            <path
              d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
              fill="#FFDA2D"
            />
            <path
              d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
              fill="#4086F4"
            />
            <path
              d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
              fill="#4175DF"
            />
            <path
              d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
              fill="#FF641A"
            />
            <path
              d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
              fill="#F03800"
            />
          </svg>
          Login with Google
        </button>
        <button class="border py-3 px-20 px-full flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_1018)">
              <path
                d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
                fill="#3B5999"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_1018">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Facebook
        </button>
      </div>
    </div>
    <!-- ==============================REGISTER============================ -->
    <div v-if="content == 'register'">
      <p class="text-[#3D3D3D] text-sm mb-3">
        Enter your username and password to login.
      </p>
      <form action="/" class="flex flex-col mb-12">
        <input
          class="border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
          placeholder="Username"
        />
        <!-- <div class="max-w-full"> -->
        <input
          class="border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
          type="email"
          placeholder="Enter your email address"
        />
        <div class="w-full relative">
          <input
            class="w-full border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
            :type="show ? 'text' : 'password'"
            placeholder="Password"
          />
          <button
            v-if="!show"
            @click="showPassword"
            class="absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path
                  d="M5.45 16.92a10.78 10.78 0 0 1-2.55-3.71a1.85 1.85 0 0 1 0-1.46A10.59 10.59 0 0 1 6.62 7.1A9 9 0 0 1 12 5.48a8.81 8.81 0 0 1 4 .85m2.56 1.72a10.85 10.85 0 0 1 2.54 3.7a1.85 1.85 0 0 1 0 1.46a10.59 10.59 0 0 1-3.72 4.65A9 9 0 0 1 12 19.48a8.81 8.81 0 0 1-4-.85"
                />
                <path
                  d="M8.71 13.65a3.28 3.28 0 0 1-.21-1.17a3.5 3.5 0 0 1 3.5-3.5c.4-.002.796.07 1.17.21m2.12 2.12c.14.374.212.77.21 1.17a3.5 3.5 0 0 1-3.5 3.5a3.28 3.28 0 0 1-1.17-.21M3 20L19 4"
                />
              </g>
            </svg>
          </button>
          <button v-else @click="showPassword" class="absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"
              />
            </svg>
          </button>
        </div>
        <input
          class="border border-[#EAEAEA] py-3 px-4 rounded-md mb-4 focus:border-[#46A358] focus:outline-none"
          type="password"
          placeholder="Confirm Password"
        />

        <!-- </div> -->

        <button
          class="bg-[#46A358] text-white text-base font-bold py-4 rounded-lg"
        >
          Register
        </button>
      </form>
      <div class="flex items-center gap-3 text-[#3D3D3D] justify-center mb-10">
        <div class="w-28 border"></div>
        <span class="text-sm">Or register with</span>
        <div class="w-28 border"></div>
      </div>
      <div class="flex flex-col justify-center">
        <button class="border py-3 px-20 px-full flex items-center gap-3 mb-5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
              fill="#59C36A"
            />
            <path
              d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
              fill="#00A66C"
            />
            <path
              d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
              fill="#FFDA2D"
            />
            <path
              d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
              fill="#4086F4"
            />
            <path
              d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
              fill="#4175DF"
            />
            <path
              d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
              fill="#FF641A"
            />
            <path
              d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
              fill="#F03800"
            />
          </svg>
          Login with Google
        </button>
        <button class="border py-3 px-20 px-full flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_1018)">
              <path
                d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
                fill="#3B5999"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_1018">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "login",
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    showPassword() {
      console.log("++++");
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped></style>
