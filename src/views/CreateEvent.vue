<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <input
        v-model="event.title"
        type="text"
        name="title"
        placeholder="Add a Title"
      />
      <input
        v-model="event.date"
        type="date"
        name="date"
        placeholder="Add a Date"
      />
      <input
        v-model="event.details"
        type="text"
        name="details"
        placeholder="What's gonna happen"
      />
      <input
        v-model="event.location"
        type="text"
        name="location"
        placeholder="Add a Location"
      />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { createEvent } from "@/services/event-service.js";

export default {
  data() {
    return {
      event: {
        title: "",
        details: "",
        date: "",
        location: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        const res = await createEvent(this.event);
        console.log("Created new event", res.data);
        this.$router.push({ name: "dashboard" });
        this.$store.dispatch("pushNotification", "A new event was created.");
      } catch (error) {
        console.error("My fault. Sorry - " + error);
        alert(
          "Oh Sorry.\nCouldn't insert your entry.\nPlease check all the input fields"
        );
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  gap: 3px;
  max-width: 450px;
  margin: 0 auto;
  /*   display: flex;
  flex-direction: column;
  align-items: center" */
}
</style>
