<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/events/new">Create Event</router-link>
    </div>
    <router-view />
    <transition appear name="fade">
      <div
        class="notification-container"
        v-if="$store.state.notifications.length > 0"
      >
        <div
          v-for="notification in $store.state.notifications"
          :key="notification.id"
        >
          <p>
            {{ notification.message }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.notification-container {
  position: fixed;
  bottom: 1em;
  right: 1em;
  width: 300px;
}
.notification-container p {
  background-color: rgba(0, 244, 0, 0.2);
  color: green;
  border-left: 3px solid green;
  padding: 1em 0;
}
/* //css selectors for the appear name="fade" transition */
.fade-enter {
  /* //starting state */
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}
.fade-leave-to {
  /* //ending state */
  opacity: 0;
}
</style>
