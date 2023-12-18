<template>
  <div class="span-grid-1">
    <div class="w-full bg-primary p-1 rounded-md relative">
      <div
        class="absolute inset-0 bg-primary opacity-10 -translate-x-2 -translate-y-2 rounded-md -z-0"
      ></div>
      <div
        class="absolute inset-0 bg-primary opacity-10 -translate-x-4 -translate-y-4 rounded-md -z-0"
      ></div>
      <img
        src="/images/pic.jpg"
        alt="mypic"
        class="relative object-cover rounded-md"
      />
      <div
        class="flex absolute px-2 bottom-4 left-4 right-4 righ text-base font-semibold uppercase text-black justify-between items-baseline"
      >
        <div class="h-1 bg-black w-[100px]"></div>
        <h1>Hosni Abdellah</h1>
      </div>
    </div>

    <!-- From  -->
    <FormApp />
    <div class="flex md:justify-between mt-2 space-x-2">
      <div
        class="border border-primary bg-primary px-2 py-2 rounded-md text-sm font-bold capitalize"
      >
        <a
          class="inline"
          href="mailto:contact.hosnii@gmail.com?subject = Feedback&body = Message"
          >Email me
        </a>
      </div>
      <!-- MY RESUME  -->
      <div
        class="border border-primary bg-primary px-2 py-2 rounded-md text-sm font-bold capitalize relative"
      >
        <span
          class="absolute w-3 h-3 rounded-full animate-ping -top-1 -left-1 bg-purple-500"
        ></span>
        <span
          class="absolute w-3 h-3 rounded-full -top-1 -left-1 bg-purple-500"
        ></span>
        <a class="inline" href="/images/CVHosni .pdf">check my resume </a>
      </div>
    </div>
  </div>
</template>

<script>
import FormApp from "./FormApp.vue";
export default {
  components: { FormApp },
};
</script>

<style lang="scss" scoped></style>
