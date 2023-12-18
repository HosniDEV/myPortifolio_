<template>
  <div class="" :class="classP">
    <div>
      <a
        href="https://www.linkedin.com/in/%F0%9D%90%80%F0%9D%90%9B%F0%9D%90%9D%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%A1-%F0%9D%90%87%F0%9D%90%A8%F0%9D%90%AC%F0%9D%90%A7%F0%9D%90%A2-a94441193/"
        ><img
          src="/images/linkedin.png"
          alt="linkedin"
          class="rounded-full w-[40px]"
      /></a>
    </div>
    <div>
      <a href="https://github.com/HosniDEV"
        ><img src="/images/git.jpg" alt="github" class="rounded-full w-[40px]"
      /></a>
    </div>
    <div>
      <a href="https://twitter.com/HosniCr">
        <img
          src="/images/twiter.png"
          alt="twitter"
          class="rounded-full w-[40px]"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classP: String,
  },
  data() {
    return {
      vertical: "vertical",
    };
  },
};
</script>

<style scoped>
.vertical {
  position: fixed;
  top: 50%;
  right: 20px;

  animation-name: translate;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}
@keyframes translate {
  0% {
    transform: translateY(-70%);
  }
  100% {
    transform: translateY(-30%);
  }
}
</style>
