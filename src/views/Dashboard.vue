<template>
  <div>
    <h1>Dashboard</h1>
    <div v-for="item in events" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
import { getEvents } from "../../src/services/event-service.js";
export default {
  data() {
    return {
      events: [1, 2, 3, "test"]
    };
  },
  async created() {
    try {
      const response = await getEvents();
      this.events = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
