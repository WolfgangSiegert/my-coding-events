<template>
  <div>
    <h2>{{ event.title }}</h2>
    <h3>{{ new Date(event.date).toDateString() }}</h3>
    <p>{{ event.details }}</p>
    <p><strong>Location: </strong></p>
    <p>{{ event.location }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style scoped></style>
