import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Registracija from "../views/Registracija.vue";
import Pacijent from "@/views/pacijent/Pacijent.vue";
import ZKarton from "@/views/pacijent/ZdravstveniKarton.vue";
import Klinike from "@/views/pacijent/Klinike.vue";
import AdministratorKC from "@/views/administrator_KC/AdministatorKC.vue";
import AdminKlinike from "@/views/administrator_klinike/AdminKlinike.vue";
import MedSestra from "@/views/medicinska_sestra/MedSestra.vue";
import Ljekar from "@/views/ljekar/Ljekar.vue";
import AktivacijaPacijenta from "@/views/pacijent/AktivacijaPacijenta.vue";
import ListaPacijenata from "@/views/medicinska_sestra/listaPacijenata.vue";
import OveraRecepta from "@/views/medicinska_sestra/overaRecepta.vue";
import RadniKalendar from "@/views/medicinska_sestra/radniKalendar.vue";
import ListaPacijenataL from "@/views/ljekar/listaPacijenata.vue";
import RadniKalendarL from "@/views/ljekar/radniKalendar.vue";
import ZapocniPregled from "@/views/ljekar/zapocniPregled.vue";
import ZakaziPregled from "@/views/ljekar/zakaziPregled.vue";
import KlinikaInfo from "@/views/klinika/KlinikaInfo.vue";
import IstorijaPregleda from "@/views/pacijent/IstorijaPregleda.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/registracija",
    name: "Registracija",
    component: Registracija,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/aktivacijaPacijenta/:id",
    name: "Aktivacija pacijenta",
    component: AktivacijaPacijenta,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/pacijent",
    name: "Pacijent",
    component: Pacijent,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/zdravstveniKarton",
    name: "ZKarton",
    component: ZKarton,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/pregledKlinika",
    name: "Klinike",
    component: Klinike,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/ljekar",
    name: "Ljekar",
    component: Ljekar,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/sestra",
    name: "Sestra",
    component: MedSestra,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/adminKC",
    name: "AdminKc",
    component: AdministratorKC,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/adminKlinike",
    name: "AdminKlinike",
    component: AdminKlinike,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/listaPacijenata",
    name: "Pacijenti",
    component: ListaPacijenata,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/overaRecepta",
    name: "Recepti",
    component: OveraRecepta,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/radniKalendar",
    name: "Kalendar",
    component: RadniKalendar,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/listaPacijenataL",
    name: "Pacijenti",
    component: ListaPacijenataL,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/radniKalendarL",
    name: "Kalendar",
    component: RadniKalendarL,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/zapocniPregled",
    name: "ZapocniPregled",
    component: ZapocniPregled,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/zakaziPregled",
    name: "ZakaziPregled",
    component: ZakaziPregled,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/klinikaInfo/:id",
    name: "KlinikaInfo",
    component: KlinikaInfo,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/istorijaPregleda",
    name: "IstorijaPregleda",
    component: IstorijaPregleda,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next();
    return;
  }

  if (localStorage.getItem("jwt")) {
    next();
    return;
  }

  next("/");
});

export default router;
