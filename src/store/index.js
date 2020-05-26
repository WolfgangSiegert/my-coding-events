import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let nextId = 1;

function getNewId() {
  const id = nextId;
  nextId += 1;
  return id;
}

export default new Vuex.Store({
  state: {
    notifications: [],
    userData: null,
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      const index = state.notifications.findIndex(
        notification => notification.id == notificationToRemove.id
      );
      state.notifications.splice(index, 1);
    },
    SET_USER_DATA(state, userData) {
      state.userData = userData;
      localStorage.setItem("userData", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${userData.jwt}`;
    },
    REMOVE_USER_DATA(state) {
      state.userData = null;
      localStorage.removeItem("userData");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  actions: {
    pushNotification(context, { type, message }) {
      const notification = {
        id: getNewId(),
        type: type || "success",
        message,
      };
      context.commit("PUSH_NOTIFICATION", notification);

      setTimeout(() => {
        context.commit("REMOVE_NOTIFICATION", notification);
      }, 6000);
    },
    async login(context, { email, password }) {
      console.log("login", email, password);
      //make a POST request to auth/local
      //import AXIOS first
      await axios
        .post(process.env.VUE_APP_API_URL + "/auth/local", {
          identifier: email,
          password,
        })
        .then(res => {
          console.log(res);
          context.commit("SET_USER_DATA", res.data);
        })
        .catch(err => {
          console.error(err);
          context.commit("PUSH_NOTIFICATION", {
            id: getNewId(),
            type: "error",
            message: "Login went wrong. Please check your input.",
          });
          setTimeout(() => {
            context.commit("REMOVE_NOTIFICATION", {
              id: getNewId(),
              type: "error",
              message: "Login went wrong. Please check your input.",
            });
          }, 6000);
        });
    },
    loadUserData(context) {
      //check if userdata exists
      const userDataAsJSONstring = localStorage.getItem("userData");
      //get the userdata  as a string from local storage
      if (userDataAsJSONstring) {
        const userData = JSON.parse(userDataAsJSONstring);
        //commit a set_user_data mutation to set the UserData variable globaly
        context.commit("SET_USER_DATA", userData);
      }
    },
    logout(context) {
      context.commit("REMOVE_USER_DATA");
    },
  },
});
