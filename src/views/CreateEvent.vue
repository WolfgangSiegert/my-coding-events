<template>
  <div>
    <h1>Create an Event</h1>
    <form v-on:submit.prevent="submit">
      <input
        v-model="eventName.title"
        type="text"
        name="title"
        placeholder="Add an Event Name"
      />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import myAxios from "axios";
export default {
  data() {
    return {
      eventName: {
        title: ""
      }
    };
  },
  methods: {
    async submit() {
      console.log(this.eventName);
      //alert(this.eventName.title);
      try {
        const response = await myAxios.post(
          "http://localhost:3000/events",
          this.eventName
        );
        console.log("Created new Event", response.data);
        return response;
      } catch (error) {
        console.error("The server call didnt work: ", error);
      }
    }
  }
};
</script>

<style scoped></style>
