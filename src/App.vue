
<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(BootstrapVue);
export default Vue.extend({
  components: {
    NavBar
  },
  mounted() {
    if (localStorage.getItem("jwt") != undefined) {
      this.$store.commit(
        "login",
        VueJwtDecode.decode(localStorage.getItem("jwt"))
      );
    }
  }
});
</script>

<style></style>
