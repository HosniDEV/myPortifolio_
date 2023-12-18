<template>
  <SocialMedia
    classP=" flex items-center space-x-2 justify-center mb-2 horizontal md:hidden  "
  />
  <div class="text-center py-3 text-primary">
    Copyright &copy; {{ new Date().getFullYear() }}. All rights reserved.
  </div>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";

export default {
  data() {
    return {
      horizontal: "horizontal",
    };
  },
  components: { SocialMedia },
};
</script>

<style scoped>
.horizontal {
  animation-name: translate;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}
@keyframes translate {
  0% {
    transform: translateX(-3%);
  }
  100% {
    transform: translateX(3%);
  }
}
</style>
