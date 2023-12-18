<template>
  <div class="flex items-center">
    <!-- link to demo project -->
    <DemoLink
      :informationlink="information.demo"
      :informationId="information.id"
    />
    <div
      class="flex-1 p-3 border-2 border-primary rounded-md relative"
      :class="{ ligne: information.id != length }"
    >
      <div class="flex space-x-4 items-center">
        <div
          class="h-[100px] w-[100px] bg-white overflow-hidden rounded-md"
          style="padding: 1px"
        >
          <img
            :src="`/images/${information.image}`"
            alt=""
            class="w-full h-full ovject-cover rounded-md hover:scale-95 duration-500 transition-transform ease-in-out"
          />
        </div>
        <div class="flex-1 space-y-2">
          <h1
            class="md:text-base md:font-semibold capitalize md:tracking-wider"
          >
            {{ information.title }}
          </h1>
          <p class="text-sm font-medium text-gray-300 line-clamp-2">
            {{ information.description }}
            <a
              :href="information.link"
              class="text-primary hover:underline cursor-pointer"
              >GitHub link</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DemoLink from "./DemoLink.vue";
export default {
  components: { DemoLink },
  props: {
    information: Object,
    length: Number,
  },
};
</script>

<style scoped>
.ligne::before {
  content: "";
  position: absolute;
  width: 2px;
  background: #00ff26;
  height: 100%;
  left: -40px;
  top: 80px;
}
</style>
