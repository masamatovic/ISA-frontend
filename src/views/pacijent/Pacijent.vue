<template>
  <div>
    <div v-if="poruka != ''">
      <errorAlert v-bind:poruka="poruka"></errorAlert>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <!--div class="fadeIn first">
            <img src="@/assets/user.png" id="icon"  alt="User Icon" />
        </div-->

        <h1 style="color:#56baed;">{{pacijent.ime}} {{pacijent.prezime}}</h1>
        <!-- Login Form -->
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Ime:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.ime"
                type="text"
                id="ime"
                class="fadeIn second"
                name="login"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Prezime:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.prezime"
                type="text"
                id="prezime"
                class="fadeIn third"
                name="login"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">JMBG:</label>
              <input
                disabled
                v-model="pacijent.jmbg"
                type="text"
                id="jmbg"
                class="fadeIn second"
                name="login"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">E-mail:</label>
              <input
                disabled
                v-model="pacijent.email"
                type="text"
                id="email"
                class="fadeIn second"
                name="login"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Adresa:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.adresa"
                type="text"
                id="adresa"
                class="fadeIn second"
                name="login"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Grad:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.grad"
                type="text"
                id="grad"
                name="login"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Drzava:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.drzava"
                type="text"
                id="drzava"
                name="login"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Broj telefona:</label>
              <input
                v-bind:disabled="!izmena"
                v-model="pacijent.telefon"
                type="text"
                id="broj"
                name="login"
              />
            </div>
          </div>
          <button v-if="!izmena" @click="omoguci_izmenu" class="btn">
            <i class="fa fa-edit"></i> Izmeni podatke
          </button>
          <button v-else @click="sacuvaj" class="btn">
            <i class="fa fa-save"></i> Sačuvaj izmene
          </button>
          <b-button v-if="!izmena" v-b-modal.modal-1>
            <i class="fa fa-lock"></i> Izmeni lozinku
          </b-button>
          <div>
            <b-modal ref="my-modal" @ok="handleOk" id="modal-1" title="Promena lozinke">
              <form ref="form" @submit.stop.prevent="izmeniLozinku">
                <b-form-group
                  label="Stara lozinka:"
                  label-for="staraL"
                  v-bind:invalid-feedback="proveraStare"
                >
                  <b-form-input
                    type="password"
                    id="staraL"
                    :state="stara"
                    v-model="lozinkaForma.oldPassword"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Nova lozinka:"
                  label-for="novaL"
                  v-bind:invalid-feedback="provera"
                >
                  <b-form-input
                    type="password"
                    id="novaL"
                    :state="nova"
                    v-model="lozinkaForma.newPassword"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Ponovi novu lozinku:"
                  label-for="ponovljenjaL"
                  v-bind:invalid-feedback="provera"
                >
                  <b-form-input
                    type="password"
                    :state="ponovljena"
                    id="ponovljenjaL"
                    v-model="potvrdaLozinke"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
          </div>
        </form>
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
      stara: null,
      nova: null,
      ponovljena: null,
      provera: "",
      proveraStare: "",
      izmena: false,
      poruka: "",
      poruka_lozinka: "",
      pacijent: {},
      potvrdaLozinke: "",
      lozinkaForma: {
        oldPassword: "",
        newPassword: ""
      }
    };
  },
  methods: {
    omoguci_izmenu() {
      event.preventDefault();
      this.izmena = true;
    },
    sacuvaj() {
      event.preventDefault();
      this.poruka = "";
      if (
        this.pacijent.ime == "" ||
        this.pacijent.prezime == "" ||
        this.pacijent.telefon == "" ||
        this.pacijent.grad == "" ||
        this.pacijent.drzava == "" ||
        this.pacijent.adresa == ""
      ) {
        this.poruka = "Morate popuniti sva polja!";
        return;
      }
      axios
        .put("/pacijent/izmeni/", this.pacijent)
        .then(response => {
          this.pacijent = response.data;
          console.log(this.pacijent);
          this.izmena = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    izlistajPacijenta() {
      axios
        .get("/pacijent/izlistajPacijenta/" + this.$store.state.user.id)
        .then(response => {
          this.pacijent = response.data;
          console.log("pacijent: " + response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    restart() {
      this.stara = null;
      this.nova = null;
      this.ponovljena = null;
      this.provera = "";
      this.proveraStare = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.restart();
      if (this.lozinkaForma.oldPassword == "") {
        this.stara = false;
        this.proveraStare = "Morate popuniti ovo polje!";
        return;
      }
      if (this.lozinkaForma.newPassword == "") {
        this.nova = false;
        this.provera = "Morate popuniti ovo polje!";
        return;
      }
      if (this.potvrdaLozinke == "") {
        this.ponovljena = false;
        this.provera = "Morate popuniti ovo polje";
        return;
      }
      if (this.lozinkaForma.newPassword != this.potvrdaLozinke) {
        this.restart();
        this.nova = false;
        this.ponovljena = false;
        this.provera = "Niste dobro uneli novu lozinu!";
        return;
      }
      this.izmeniLozinku();
    },
    izmeniLozinku() {
      event.preventDefault();
      axios
        .post("/auth/promeniLozinku/", this.lozinkaForma)
        .then(response => {
          console.log(response);
          this.$refs["my-modal"].hide();
          alert("uspesno ste promenili lozinku");
        })
        .catch(error => {
          this.stara = false;
          this.proveraStare = "Uneli ste netacnu staru lozinku!";
          console.log(error);
        });
    }
  },
  mounted() {
    this.izlistajPacijenta();
  }
};
</script>

<style scoped>
/* BASIC */
img {
  padding-top: 10px;
  width: 120px;
  height: 120px;
}
label {
  text-align: left;
  float: left;
  padding: 5px 10px;
  margin: 5px;
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
input[type="reset"],
button {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /*text-transform: uppercase;*/
  font-size: 16px;
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

input[type="text"]:disabled {
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

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type="text"] {
  background-color: white;
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

input[type="text"]:placeholder {
  color: #cccccc;
}
/* OTHERS */

*:focus {
  outline: none;
}
</style>
