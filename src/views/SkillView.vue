<template>
  <div class="text-white text-center uppercase text-2xl font-bold mt-4">
    Some of my skills
  </div>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10"
  >
    <CardSkill img="laravel.jpg" percent="60" />
    <CardSkill img="vuejs.jpg" percent="50" />
    <CardSkill img="tailwind.jpg" percent="70" />
    <CardSkill img="html.jpg" percent="80" />
    <CardSkill img="css.jpg" percent="75" />
    <CardSkill img="js.jpg" percent="55" />
    <CardSkill img="php.jpg" percent="60" />
    <CardSkill img="c.jpg" percent="50" />
    <CardSkill img="c++.jpg" percent="40" />
    <CardSkill img="git.jpg" percent="45" />
    <CardSkill img="adobe_photoshop.jpg" percent="65" />
    <CardSkill img="adobe_illustrator.jpg" percent="75" />
    <CardSkill img="adobe_xd.jpg" percent="60" />
    <CardSkill img="adobe_premiere.jpg" percent="30" />
  </div>
</template>

<script>
import CardSkill from "@/components/CardSkill.vue";
export default {
  components: { CardSkill },
};
</script>

<style scoped></style>
