<template>
  <div class="mt-4 w-full">
    <div class="flex justify-between items-baseline">
      <div class="bg-primary" style="height: 1px; width: 50%"></div>
      <div><h1 class="text-lg font-medium mb-2 text-end">Hit me up</h1></div>
    </div>
    <form action="" class="w-full space-y-2" @submit.prevent="sendEmail()">
      <!-- flash Message -->
      <div
        class="bg-green-500 text-center text-base font-bold py-1 rounded-md transition-all ease-out"
        v-if="flashMessage"
      >
        Email sent successfully
      </div>
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
          placeholder="your  name"
          class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md placeholder:text-sm bg-black border border-primary"
          required
          v-model="name"
          @keypress="email != ' ' ? (cancel = true) : (cancel = false)"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="your email address"
          v-model="email"
          class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md placeholder:text-sm bg-black border border-primary"
          required
        />
      </div>

      <textarea
        placeholder="your message "
        id="message"
        v-model="message"
        class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md placeholder:text-sm bg-black border border-primary"
        required
      ></textarea>

      <button
        class="w-full px-2 py-2 focus:outline-none focus:ring focus:ring-primary rounded-md bg-primary font-bold"
      >
        submit
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      cancel: false,
      name: "abdellah",
      email: "hosni@gmail.com",
      message: "well done",
      flashMessage: false,
    };
  },

  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      };

      // Your EmailJS userID and service ID
      const userID = "lMqlWvU3tn2YxJ0C7";

      const templateID = "template_wxzd8nk";
      const serviceID = "service_0097";

      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          this.flashMessage = true;
          setTimeout(() => {
            this.flashMessage = false;
          }, 2000);
          console.log("Email sent!", response);
          // Reset form fields after successful submission
          this.name = "";
          this.email = "";
          this.message = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
