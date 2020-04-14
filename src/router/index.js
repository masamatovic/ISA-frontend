import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registracija from "../views/Registracija.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/proba",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/registracija",
    name: "Registracija",
    component: Registracija
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
