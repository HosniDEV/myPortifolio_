<template>
  <div class="mt-4 w-full">
    <div class="flex justify-between items-baseline">
      <div class="bg-primary" style="height: 1px; width: 50%"></div>
      <div><h1 class="text-lg font-medium mb-2 text-end">Hit me up</h1></div>
    </div>
    <form action="" class="w-full space-y-2" @submit.prevent="">
      <div class="relative">
        <span v-if="cancel" class="absolute right-2 inset-y-0 flex items-center"
          ><svg
            width="20"
            height="20"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="your email address"
          class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md placeholder:text-sm bg-black border border-primary"
          required
          v-model="email"
          @keypress="email != ' ' ? (cancel = true) : (cancel = false)"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="............"
          class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md placeholder:text-sm bg-black border border-primary"
        />
      </div>
      <input
        type="submit"
        placeholder="............"
        value="Submit"
        class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md bg-primary font-bold"
        required
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cancel: false,
      email: "",
    };
  },
  watch: {
    email(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
