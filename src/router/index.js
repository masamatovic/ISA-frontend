import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registracija from "../views/Registracija.vue";
import Pacijent from '@/views/pacijent/Pacijent.vue';
import ZKarton from "@/views/pacijent/ZdravstveniKarton.vue";


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
  },
  {
    path: "/pacijent",
    name: "Pacijent",
    component: Pacijent
  },
  {
    path: "/zdravstveniKarton",
    name: "ZKarton",
    component: ZKarton
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
