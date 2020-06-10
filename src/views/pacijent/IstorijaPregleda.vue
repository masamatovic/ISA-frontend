<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div v-if="poruka!=''">
      <errorAlert v-bind:poruka="poruka"></errorAlert>
    </div>
    <b-row>
      <b-col cols="3">
        <div>
          <b-card class="kontrole" title="Upravljanje klinikama">
            <div>
              <br />
              <h5>Sortiraj preglede po:</h5>
              <b-select>
                <option value="naziv">Tipu pregleda</option>
                <option value="grad">Datumu</option>
              </b-select>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Tip pregleda</th>
              <th scope="col">Klinika</th>
              <th scope="col">Doktor</th>
              <th scope="col">Datum i vreme</th>
              <th scope="col">Sala</th>
              <th scope="col">Oceni kliniku</th>
              <th scope="col">Oceni doktora</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pregled, index) in listaPregleda" :key="index">
              <th scope="col">{{ pregled.tip.naziv }}</th>
              <th scope="col">{{ pregled.klinika.naziv }}</th>
              <th scope="col">{{ pregled.doktor.ime }} {{ pregled.doktor.prezime }}</th>
              <th scope="col">{{ pregled.datum }} u {{ pregled.vreme }}h</th>
              <th scope="col">{{ pregled.sala.naziv }} {{ pregled.sala.broj }}</th>
              <th>
                <b-button v-b-modal.modal-1 @click="setKlinika(pregled)">Oceni kliniku</b-button>

                <b-modal
                  v-if="prikaziOKmodal"
                  id="modal-1"
                  title="Ocenite kliniku"
                  @ok="oceniKliniku(pregled)"
                  @show="resetModalOK"
                >
                  <b-form-rating v-model="ocenaKlinike"></b-form-rating>
                </b-modal>
              </th>
              <th>
                <b-button v-b-modal.modal-2 @click="prikaziOLmodal = true">Oceni lekara</b-button>

                <b-modal
                  v-if="prikaziOLmodal"
                  id="modal-2"
                  title="Ocenite lekara"
                  @ok="oceniLekara(pregled.doktor.id)"
                  @show="resetModalOL"
                >
                  <b-form-rating v-model="ocenaLekara"></b-form-rating>
                </b-modal>
              </th>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
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
      poruka: "",
      listaPregleda: [],
      ocenaLekara: 0,
      ocenaKlinike: 0,
      prikaziOLmodal: false,
      prikaziOKmodal: false,
      OL: {},
      OK: {}
    };
  },
  methods: {
    setKlinika(pregled) {
      this.prikaziOKmodal = true;
      this.OK.klinika = pregled.klinika.id;
    },
    setLekar(pregled) {
      this.prikaziOLmodal = true;
      this.OL.doktor = pregled.doktor.id;
    },
    izlistajPreglede() {
      axios
        .get("/pregled/izlistajIstoriju/" + this.$store.state.user.id)
        .then(response => {
          this.listaPregleda = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    oceniLekara() {
      this.OL.pacijent = this.$store.state.user.id;
      this.OL.ocena = this.ocenaLekara;
      axios
        .post("/doktor/oceni/", this.OL)
        .then(response => {
          console.log(response.data);
          this.prikaziOLmodal = false;
          // alert("Ocenili ste doktora");
        })
        .catch(error => {
          console.log(error);
          this.prikaziOLmodal = false;
          alert("Ne mozete dva puta oceniti doktora");
        });
    },
    oceniKliniku() {
      this.OK.pacijent = this.$store.state.user.id;
      this.OK.ocena = this.ocenaKlinike;
      axios
        .post("/klinika/oceni/", this.OK)
        .then(response => {
          console.log(response.data);
          this.prikaziOKmodal = false;
          // alert("Ocenili ste kliniku");
        })
        .catch(error => {
          console.log(error);
          this.prikaziOKmodal = false;
          alert("Ne mozete dva puta oceniti kliniku");
        });
    },
    resetModalOL() {
      this.ocenaLekara = 0;
    },
    resetModalOK() {
      this.ocenaKlinike = 0;
    }
  },
  mounted() {
    this.izlistajPreglede();
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
.dugme {
  background-color: #56baed;
  border: none;
  color: white;
  margin-left: 70px;
  margin-right: 20px;
  margin-top: 10px;
}

.kontrole {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10px;
  margin-top: 20px;
  background-color: #f7f7f7;
}
.kartica {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 20px;
  padding-left: 10px;
  max-width: 880px;

  position: relative;
}
</style>
