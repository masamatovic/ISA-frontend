import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    path: "/proba",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/registracija",
    name: "Registracija",
    component: Registracija,
  },
  {
    path: "/aktivacijaPacijenta/:id",
    name: "Aktivacija pacijenta",
    component: AktivacijaPacijenta,
  },

  {
    path: "/pacijent",
    name: "Pacijent",
    component: Pacijent,
  },
  {
    path: "/zdravstveniKarton",
    name: "ZKarton",
    component: ZKarton,
  },
  {
    path: "/pregledKlinika",
    name: "Klinike",
    component: Klinike,
  },
  {
    path: "/ljekar",
    name: "Ljekar",
    component: Ljekar,
  },
  {
    path: "/sestra",
    name: "Sestra",
    component: MedSestra,
  },
  {
    path: "/adminKC",
    name: "AdminKc",
    component: AdministratorKC,
  },
  {
    path: "/adminKlinike",
    name: "AdminKlinike",
    component: AdminKlinike,
  },
  {
    path: "/listaPacijenata",
    name: "Pacijenti",
    component: ListaPacijenata,
  },
  {
    path: "/overaRecepta",
    name: "Recepti",
    component: OveraRecepta,
  },
  {
    path: "/radniKalendar",
    name: "Kalendar",
    component: RadniKalendar,
  },
  {
    path: "/listaPacijenataL",
    name: "Pacijenti",
    component: ListaPacijenataL,
  },
  {
    path: "/radniKalendarL",
    name: "Kalendar",
    component: RadniKalendarL,
  },
  {
    path: "/zapocniPregled",
    name: "Kalendar",
    component: ZapocniPregled,
  },
  {
    path: "/zakaziPregled",
    name: "Kalendar",
    component: ZakaziPregled,
  },
  {
    path: "/klinikaInfo/:id",
    name: "KlinikaInfo",
    component: KlinikaInfo,
  },
  {
    path: "/istorijaPregleda",
    name: "IstorijaPregleda",
    component: IstorijaPregleda,
  },
];

const router = new VueRouter({
  //mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
