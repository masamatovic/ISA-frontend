import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registracija from "../views/Registracija.vue";
import Pacijent from '@/views/pacijent/Pacijent.vue';
import ZKarton from "@/views/pacijent/ZdravstveniKarton.vue";
import Klinike from '@/views/pacijent/Klinike.vue';
import AdministratorKC from '@/views/administrator_KC/AdministatorKC.vue';
import AdminKlinike from "@/views/administrator_klinike/AdminKlinike.vue";
import MedSestra from "@/views/medicinska sestra/MedSestra.vue";
import Ljekar from "@/views/ljekar/Ljekar.vue";


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
  },
  {
    path: "/pregledKlinika",
    name: "Klinike",
    component: Klinike
  },
  {
    path: "/ljekar",
    name: "Ljekar",
    component: Ljekar
  },
  {
    path: "/sestra",
    name: "Sestra",
    component: MedSestra
  },
  {
    path: "/adminKC",
    name: "AdminKc",
    component: AdministratorKC
  },
  {
    path: "/adminKlinike",
    name: "AdminKlinike",
    component: AdminKlinike
  }

];

const router = new VueRouter({
  //mode: "history",
 // base: process.env.BASE_URL,
  routes
});

export default router;
