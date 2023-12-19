<template>
  <div class="flex justify-between items-center border-b-primary">
    <router-link to="/"
      ><div>
        <img src="/images/logo.png" alt="" width="40" /></div
    ></router-link>
    <router-link to="skills">
      <div
        class="text-base font-thin text-primary border border-primary px-3 py-1 rounded-md shadow-sm shadow-primary hover:bg-third hover:text-white transition-colors duration-500 ease-out group"
      >
        <h1>
          ABDELLAH HOSNI
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-5 h-5 text-primary animate-bounce group-hover:text-white inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </h1></div
    ></router-link>
  </div>
</template>

<script>
import { ChevronDoubleDownIcon } from "@vue-hero-icons/outline";
export default {
  components: { ChevronDoubleDownIcon },
};
</script>

<style lang="scss" scoped></style>
