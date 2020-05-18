import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let nextID = 1;

function getNewID() {
  const id = nextID;
  nextID += 1;
  return id;
  //return nextID++; //alternative
}
// calling the Vuex.Store constructor
export default new Vuex.Store({
  state: {
    notifications: [],
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      const indexToDelete = state.notifications.findIndex(
        notification => notification.id == notificationToRemove.id
      );
      state.notifications.splice(indexToDelete, 1);
    },
  },
  actions: {
    pushNotification(context, message) {
      const notification = {
        id: getNewID(),
        message,
      };
      context.commit("PUSH_NOTIFICATION", notification);

      setTimeout(() => {
        context.commit("REMOVE_NOTIFICATION", notification);
      }, 5000);
    },
  },
  modules: {},
});
