<template>
  <a
    :href="informationlink"
    :class="{ 'cursor-not-allowed': informationlink === '' }"
  >
    <div
      class="relative group w-10 h-10 bg-black border-2 border-primary rounded-full mr-4 flex items-center justify-center"
    >
      <div
        class="absolute text-white text-xs text-center hidden -left-16 group-hover:block transition-all duration-1000 ease-in-out text-black text-xs border-2 border-primary rounded-full w-[100px] -rotate-90"
      >
        check demo
      </div>
      <h1 class="text-black text-2xl font-bold text-primary">
        {{ informationId }}
      </h1>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    informationlink: String,
    informationId: Number,
  },
};
</script>

<style scoped></style>
