import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import LoginPage from "@/views/LoginPage.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/events/new",
    name: "create-event",
    component: CreateEvent,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //If no user is authenticatetd do a redirect to the login
  if (to.name != "login" && store.state.userData == null) {
    return next({ name: "login" });
  }
  next();
});
export default router;
