<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <img src="@/assets/clinic.png" width="30" height="30" class="d-inline-block align-top" alt="">
        <span class="navbar-brand mb-0 h1">Klinicki centar</span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link :to="{name: 'Pacijent'}" class="nav-item nav-link" v-if="korisnik=='pacijent'">
                    Profil
                </router-link>
                <router-link :to="{name: 'ZKarton'}" class="nav-item nav-link" v-if="korisnik=='pacijent'">
                    Zdravstveni karton
                </router-link>
                <router-link :to="{name: 'Klinike'}" class="nav-item nav-link" v-if="korisnik=='pacijent'">
                    Pregled klinika
                </router-link>
                
                

               
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        props:['korisnik'],
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>