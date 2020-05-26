<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="submit">
      <input
        v-model="user.email"
        type="email"
        name="email"
        placeholder="Enter a valid Email"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="Set Your Password"
      />
      <button type="submit">Send Login Data</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        console.log("submit message: " + this.user);
        await this.$store.dispatch("login", this.user);
        this.$router.push("/");
      } catch (error) {
        //this code is never reached because I implemented in the store actions "login" - maybe bad pattern just for playing around
        this.$store.dispatch("pushNotification", {
          type: "error",
          message: "Login went wrong. Please check your input.",
        });
      }
    },
  },
};
</script>

<style scoped></style>
