<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="@/assets/clinic.png" width="30" height="30" class="d-inline-block align-top" alt />
      <span class="navbar-brand mb-0 h1">Klinicki centar</span>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'PACIJENT'"
          >Profil</router-link>
          <router-link
            :to="{ name: 'ZKarton' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'PACIJENT'"
          >Zdravstveni karton</router-link>
          <router-link
            :to="{ name: 'Klinike' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'PACIJENT'"
          >Pregled klinika</router-link>
          <router-link
            :to="{ name: 'IstorijaPregleda' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'PACIJENT'"
          >Istorija Pregleda</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'MEDICINSKA_SESTRA'"
          >Profil</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'MEDICINSKA_SESTRA'"
          >Lista pacijenata</router-link>

          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'MEDICINSKA_SESTRA'"
          >Pregled</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'MEDICINSKA_SESTRA'"
          >Radni kalendar</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'MEDICINSKA_SESTRA'"
          >Slobodni dani</router-link>

          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Profil</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Lista pacijenata</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Profil</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Zapocni Pregled</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Radni kalendar</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Slobodni dani</router-link>
          <router-link
            :to="{ name: 'Pacijent' }"
            class="nav-item nav-link"
            v-if="this.$store.state.user.role.authority == 'DOKTOR'"
          >Zakazi pregled</router-link>
          <button
            type="button"
            id="odjava"
            @click="odjava"
            class="btn btn-outline-secondary"
            style="position: relative; left: 2%;"
            v-if="this.$store.state.user.role.authority == 'PACIJENT'"
          >Odjava</button>
          <button
            type="button"
            id="odjava"
            @click="odjava"
            class="btn btn-outline-secondary"
            style="position: relative; left: 72%;"
            v-if="this.$store.state.user.role.authority == 'ADMIN_KCENTRA'"
          >Odjava</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  //props:['korisnik'],
  data() {
    return {};
  },
  methods: {
    odjava() {
      localStorage.removeItem("jwt");
      this.$store.commit("logout");
      /* this.$store.state.user = {
                         role: {
                            authority: ''
                            }   
                        };*/
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#odjava {
  margin-left: 600px;
}
</style>
