<script>
import Card from "@/components/Card.vue";
import ExpericenceCard from "@/components/ExpericenceCard.vue";
import informations from "@/informations.json";

export default {
  components: { Card, ExpericenceCard },
  data() {
    return {
      informations: informations,
      size: 1,
    };
  },
};
</script>

<template>
  <main class="my-10">
    <p class=""></p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-start">
      <Card />

      <div class="md:col-span-2 space-y-3">
        <div
          class="p-3 border-2 border-primary rounded-md transition-all duration-500 ease-in"
        >
          <p>
            Greetings! <span class="text-primary font-bold">I’m HOSNI</span>. I
            spend my days designing and developing web applications, I
            specialize in the Laravel PHP framework on the backend, Vue.js on
            the frontend and Tailwind CSS for styling
          </p>
        </div>
        <ExpericenceCard
          v-for="information in informations"
          :key="information.id"
          :information="information"
          :length="informations.length"
        />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
