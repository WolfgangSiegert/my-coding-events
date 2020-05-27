import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//Adding the vuelidate library for validation helpers
Vue.use(Vuelidate);

store.dispatch("loadUserData");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
