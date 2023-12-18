<template>
  <div
    class="group relative bg-white grayscale-[90%] hover:grayscale-0 rounded-md overflow-hidden transition-all duration-500 ease-in-out border border-primary w-full"
  >
    <div
      class="absolute top-3 -left-2 hidden group-hover:block duration-500 transition ease-in-out"
    >
      <div class="-rotate-90 bg-primary px-2 text-black">{{ percent }}%</div>
    </div>
    <img :src="`/images/${img}`" alt="" class="w-full object-contain" />
  </div>
</template>

<script>
export default {
  props: { img: String, classC: String, percent: Number },
};
</script>

<style scoped>
.border {
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  animation-name: rotate;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}
@keyframes rotate {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(7%);
    background: red;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }
}
</style>
