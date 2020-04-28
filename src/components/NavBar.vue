<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <img src="@/assets/clinic.png" width="30" height="30" class="d-inline-block align-top" alt="">
        <span class="navbar-brand mb-0 h1">Klinicki centar</span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link :to="{name: 'Pacijent'}" class="nav-item nav-link" v-if="this.$store.state.user.role.authority=='PACIJENT'">
                    Profil
                </router-link>
                <router-link :to="{name: 'ZKarton'}" class="nav-item nav-link" v-if="this.$store.state.user.role.authority=='PACIJENT'">
                    Zdravstveni karton
                </router-link>
                <router-link :to="{name: 'Klinike'}" class="nav-item nav-link" v-if="this.$store.state.user.role.authority=='PACIJENT'">
                    Pregled klinika
                </router-link>
                <span>
                <button type="button" id="odjava" @click="odjava" class="btn btn-outline-secondary" v-if="this.$store.state.user.role.authority!=''">Odjava</button>   
                </span>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        //props:['korisnik'],
        data() {
            return {
                
            }
        },
        methods: {
            odjava() {
                localStorage.removeItem("jwt");
                this.$store.commit('logout')
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
#odjava{
    margin-left: 750px;
}
</style>