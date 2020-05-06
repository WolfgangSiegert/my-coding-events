import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/views/Dashboard.vue";
import CreateEvent from "../views/CreateEvent.vue";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  //default vue setup routes deleted an disabled
  {
    path: "/",
    name: "Dashboard",
    component: DashBoard
  },
  {
    path: "/createEvent",
    name: "Create-Event",
    component: CreateEvent
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
