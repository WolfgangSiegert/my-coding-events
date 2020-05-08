<template>
  <div>
    <h1>Create an Event</h1>
    <form action="">
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
export default {
  data() {
    return {
      eventName: {
        title: ""
      }
    };
  }
};
</script>

<style scoped></style>
