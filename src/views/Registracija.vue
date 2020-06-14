<template>
  <div class="pocetna">
    <div v-if="poruka != ''">
      <errorAlert v-bind:poruka="poruka"></errorAlert>
    </div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <h1 style="color:#56baed;">Registracija</h1>
        <!-- Login Form -->
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.ime"
                id="ime"
                class="fadeIn second"
                name="login"
                placeholder="Ime"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.prezime"
                id="prezime"
                class="fadeIn third"
                name="login"
                placeholder="Prezime"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.jmbg"
                id="jmbg"
                class="fadeIn second"
                name="login"
                placeholder="JMBG"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.email"
                id="email"
                class="fadeIn second"
                name="login"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="password"
                v-model="korisnik.lozinka"
                id="lozinka"
                class="fadeIn second"
                name="login"
                placeholder="Lozinka"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="password"
                v-model="potvrda"
                id="potvrda"
                class="fadeIn third"
                name="login"
                placeholder="Potvrda lozinke"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.adresa"
                id="adresa"
                class="fadeIn second"
                name="login"
                placeholder="Adresa"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.grad"
                id="grad"
                class="fadeIn third"
                name="login"
                placeholder="Grad"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.drzava"
                id="drzava"
                class="fadeIn second"
                name="login"
                placeholder="Država"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="korisnik.telefon"
                id="broj"
                class="fadeIn third"
                name="login"
                placeholder="Broj telefona"
              />
            </div>
          </div>

          <input type="submit" v-on:click="registracija" class="fadeIn fourth" value="Registracija" />
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
          <router-link :to="{name: 'Login'}" class="underlineHover">Prijava</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import errorAlert from "@/components/errorAlert.vue";
export default {
  components: {
    errorAlert
  },
  data() {
    return {
      korisnik: {},
      potvrda: "",
      poruka: ""
    };
  },
  methods: {
    restart() {
      this.korisnik.ime = "";
      this.korisnik.prezime = "";
      this.korisnik.jmbg = "";
      this.korisnik.telefon = "";
      this.korisnik.email = "";
      this.korisnik.grad = "";
      this.korisnik.drzava = "";
      this.korisnik.adresa = "";
      this.korisnik.lozinka = "";
      this.potvrda = "";
    },
    registracija() {
      event.preventDefault();

      if (
        this.korisnik.ime == "" ||
        this.korisnik.prezime == "" ||
        this.korisnik.jmbg == "" ||
        this.korisnik.telefon == "" ||
        this.korisnik.email == "" ||
        this.korisnik.grad == "" ||
        this.korisnik.drzava == "" ||
        this.korisnik.adresa == "" ||
        this.korisnik.lozinka == ""
      ) {
        this.poruka = "Morate popuniti sva polja!";
        return;
      }
      if (this.korisnik.lozinka != this.potvrda) {
        this.poruka = "Potvda lozinke je neispravna!";
        this.korisnik.lozinka = "";
        this.potvrda = "";
        return;
      }

      this.poruka = "";
      if (this.korisnik.email == "" || this.korisnik.lozinka == "") {
        this.poruka = "Morate popuniti sva polja!";
        return;
      }
      axios
        .post("/auth/zahtevZaRegistraciju/", this.korisnik)
        .then(response => {
          console.log(response);
          alert("Vas zahtev za registraciju je poslat");
          this.restart();
        })
        .catch(error => {
          this.poruka = "";
          this.poruka = "Vec postoji korisnik ili zahtev sa ovim emailom!";
          this.restart();
          console.log(error);
        });
    }
  }
};
</script>

<style  scoped>
/* BASIC */
.pocetna {
  height: 100vh;
  background-image: url("https://www.apeseg.org.pe/wp-content/uploads/2020/03/GettyImages-1072286960.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
}
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 20px;
  width: 90%;
  max-width: 700px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 92%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}
</style>