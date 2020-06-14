<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div id="formHeader">
        <h2>Informacije o pregledu</h2>
      </div>
      <b-row style="margin-top: 20px;">
        <b-col sm="3">
          <label for="Ime">Tip pregleda:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input disabled v-model="pregledInfo.tipPregleda.naziv" id="Ime" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="kolona">
        <b-col sm="3">
          <label for="Prezime">Datum pregleda:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input disabled v-model="pregledInfo.datum" id="Prezime" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="kolona">
        <b-col sm="3">
          <label for="Pol">Vreme pregleda:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input readonly id="Pol" v-model="pregledInfo.vreme" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="kolona">
        <b-col sm="3">
          <label for="KGrupa">Doktor:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input disabled id="KGrupa" v-model="doktor" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="kolona">
        <b-col sm="3">
          <label for="Visina">Cena:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input disabled v-model="pregledInfo.tipPregleda.cena" id="Visina" type="text"></b-form-input>
        </b-col>
      </b-row>

      <b-button class="dugme" @click="zakazi()">Zakaži pregled</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    pregledInfo: {}
  },
  data() {
    return {
      doktor: "",
      tipPregleda: {},
      zahtev: {
        datum: "",
        vreme: "",
        doktor: 0,
        pacijent: 0,
        klinika: 0,
        tip: 0
      },
      vraceniZahtev: {}
    };
  },
  methods: {
    imeIpezime() {
      this.doktor =
        this.pregledInfo.doktor.ime + " " + this.pregledInfo.doktor.prezime;
    },
    izlistajTipPregleda() {
      axios
        .get("/tipPregleda/izlistaj/" + this.pregledInfo.tipPregleda)
        .then(response => {
          this.tipPregleda = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    zakazi() {
      this.zahtev.datum = this.pregledInfo.datum;
      this.zahtev.cena = this.pregledInfo.tipPregleda.cena;
      this.zahtev.vreme = this.pregledInfo.vreme;
      this.zahtev.doktor = this.pregledInfo.doktor.id;
      this.zahtev.pacijent = this.$store.state.user.id;
      this.zahtev.klinika = this.pregledInfo.klinika;
      this.zahtev.tip = this.pregledInfo.tipPregleda.id;
      console.log(this.zahtev);
      axios
        .post("/zahtevZaPregled/posalji", this.zahtev)
        .then(response => {
          this.vraceniZahtev = response.data;
          alert("Zahtev za pregled je poslat");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.imeIpezime();
    // this.izlistajTipPregleda();
  }
};
</script>

<style scoped>
.kolona {
  margin-top: 10px;
  margin-bottom: 10px;
}

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
  border: 1px solid darkgray;
  background-color: #f7f7f7;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formHeader {
  background-color: #f7f7f7;
  border-bottom: 1px solid darkgray;
  padding: 20px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 10px 10px 0 0;
}

/* FORM TYPOGRAPHY*/

input[type="text"] {
  background-color: #f7f7f7;
  border: 1px solid darkgray;
  color: #0d0d0d;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 92%;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

.dugme {
  text-align: center;
  display: inline-block;
  margin: 5px 20px 40px 20px;
}
</style>
