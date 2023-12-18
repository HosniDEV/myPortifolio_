<template>
  <div class="bg-black text-white min-h-screen p-2 relative">
    <div
      class="card hidden lg:-rotate-45 text-xs bg-white text-black py-2 px-1 lg:block"
    >
      Junion full stack developer
    </div>

    <SocialMedia classP="vertical hidden lg:block space-y-3" />
    <div class="max-w-5xl m-auto">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import SocialMedia from "@/components/SocialMedia.vue";

export default {
  components: { HomeView, Footer, Header, SocialMedia },
};
</script>

<style scoped>
.card {
  position: fixed;
  top: 84px;
  left: -18px;
}
</style>
