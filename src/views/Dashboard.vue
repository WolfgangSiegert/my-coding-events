<template>
  <div>
    <h1>Dashboard</h1>
    <EventCard v-for="item in events" :key="item.id" :event="item"></EventCard>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { getEvents } from "../../src/services/event-service.js";
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [1, 2, 3, "test"],
    };
  },
  async created() {
    try {
      const response = await getEvents();
      this.events = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
