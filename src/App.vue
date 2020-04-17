<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <NavBar v-bind:korisnik="korisnik"></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";

Vue.use(BootstrapVue);
export default Vue.extend({
  components: {
    NavBar,
  },
  data() {
    return {
      korisnik: "pacijent"
    }
  },
});
</script>

<style></style>
