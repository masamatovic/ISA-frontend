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
          <b-card class="kontrole" title="Informacije o klinici">
            <div>
              <br />
              <h5>
                <b>Naziv klinike:</b>
                {{ klinika.naziv }}
              </h5>
              <h6>
                <b>Adresa:</b>
                {{ klinika.adresa }}
              </h6>
              <h6>
                <b>Grad:</b>
                {{ klinika.grad }}
              </h6>
              <h6>
                <b>Drzava:</b>
                {{ klinika.drzava }}
              </h6>
              <br />
              <b-dropdown text="Prikazi" style="width:100%">
                <b-dropdown-item @click="prikaziPreglede" href="#">Unapred definisane preglede</b-dropdown-item>
                <b-dropdown-item @click="prikaziLekare" href="#">Listu lekara</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div v-if="prikaz == 1">
          <!--TabelaUDPregleda v-model="udPregledi"></TabelaUDPregleda-->
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Tip pregleda</th>
                <th scope="col">Cena</th>
                <th scope="col">Popust</th>
                <th scope="col">Trajanje</th>
                <th scope="col">Datum i vreme</th>
                <th scope="col">Sala</th>
                <th scope="col">Doktor</th>
                <th scope="col">Rezervisi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pregled, index) in udPregledi" :key="index">
                <th scope="col">{{ pregled.tip.naziv }}</th>
                <th scope="col">{{ pregled.cena }}</th>
                <th scope="col">{{ pregled.popust }}</th>
                <th scope="col">{{ pregled.trajanje }}</th>
                <th scope="col">{{ pregled.datum }} u {{ pregled.vreme }}</th>
                <th scope="col">{{ pregled.sala.naziv }} {{ pregled.sala.broj }}</th>
                <th scope="col">{{ pregled.doktor.ime }} {{ pregled.doktor.prezime }}</th>
                <th scope="col">
                  <b-button @click="rezervisi(pregled)">Reservisi</b-button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="prikaz == 2">
          <b-form inline style=" margin-top: 20px;">
            <b-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              style="width:17%"
              placeholder="Ime"
              v-model="doktor.ime"
            ></b-input>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                style="width:17%"
                id="inline-form-input-surname"
                v-model="doktor.prezime"
                placeholder="Prezime"
              ></b-input>
            </b-input-group>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-input style="width:17%" id="inline-form-input-range" placeholder="Ocena"></b-input>
            </b-input-group>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-dropdown
                text="Tip pregleda"
                split
                split-variant="outline-secondary "
                variant="secondary "
                v-model="doktor.tipPregleda "
              >
                <b-dropdown-item
                  v-for="(tp, index) in tipoviPregleda"
                  :key="index"
                  href="#"
                  @click="doktor.tipPregleda = tp"
                >{{ tp.naziv }}</b-dropdown-item>
              </b-dropdown>
            </b-input-group>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-datepicker
                :min="min"
                id="example-datepicker"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                v-model="datum"
              ></b-form-datepicker>
            </b-input-group>
            <b-button variant="secondary " @click="pretrazi()">Pretrazi</b-button>
          </b-form>
          <!--TabelaLekara v-bind:listaLekara="listaLekara"></TabelaLekara-->
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Ime</th>
                <th scope="col">Prezime</th>
                <th scope="col">Prosecna ocena</th>
                <th scope="col">Datum i vreme</th>
                <th scope="col">Detalji</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lekar, index) in listaLekara" :key="index">
                <th scope="col">{{ lekar.ime }}</th>
                <th scope="col">{{ lekar.prezime }}</th>
                <th scope="col">5</th>
                <th scope="col">
                  <VueCtkDateTimePicker
                    :id="index"
                    v-model="time"
                    format="H"
                    time-format="H:mm"
                    formatted="H"
                    locale="rs"
                    :only-time="onlyTime"
                    :disabled-hours="lekar.zauzetiSati"
                    label="Odaberite datum"
                    minute-interval="60"
                    color="#6c757d"
                  />
                </th>
                <th scope="col">
                  <b-button @click="vidiDetalje(lekar)">Detalji</b-button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="prikaz == 3">
          <PregledInfo v-bind:pregledInfo="pregledInfo"></PregledInfo>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import PregledInfo from "@/components/PregledInfo.vue";
import errorAlert from "@/components/errorAlert.vue";
export default {
  components: {
    VueCtkDateTimePicker,
    PregledInfo,
    errorAlert
  },
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 1);
    return {
      klinika: {
        id: 0,
        adresa: "",
        naziv: "",
        grad: "",
        drzava: ""
      },
      doktor: {
        ime: "",
        prezime: "",
        tipPregleda: {
          naziv: ""
        }
      },
      datum: "",
      udPregledi: [],
      listaLekara: [],
      prikaz: 2,
      tipoviPregleda: [],
      min: minDate,
      time: "",
      onlyTime: true,
      pregledInfo: {
        doktor: null,
        tipPregleda: null,
        datum: "",
        vreme: "",
        klinika: 0
      },
      poruka: "",
      pretragaKlinika: false
    };
  },
  /*  computed: {
    filtritaniDoktori: function() {
      return this.listaLekara.filter((lekar) => {
        return lekar.prezime.match(this.doktor.prezime);
      });
    },
  },*/
  methods: {
    vidiDetalje(lekar) {
      this.poruka = "";
      if (!this.pretragaKlinika) {
        if (
          this.datum == "" ||
          this.doktor.tipPregleda.naziv == "" ||
          this.time == ""
        ) {
          this.poruka = "Morate uneti datum, tip pregleda i vreme pregleda";
          return;
        }
      } else {
        if (this.time == "") {
          this.poruka = "Morate uneti vreme pregleda";
          return;
        }
      }

      this.pregledInfo.doktor = lekar;
      this.pregledInfo.tipPregleda = lekar.tipPregleda;
      this.pregledInfo.datum = this.datum;
      this.pregledInfo.vreme = this.time;
      this.pregledInfo.klinika = this.klinika.id;
      this.prikaz = 3;
    },
    prikaziPreglede() {
      this.izlistajUDPreglede();
      this.prikaz = 1;
    },
    prikaziLekare() {
      this.izlistajLekare();
      this.prikaz = 2;
    },
    pretrazi() {
      this.poruka = "";
      if (this.datum == "" || this.doktor.tipPregleda.naziv == "") {
        this.poruka = "Morate uneti datup i tip pregleda!";
        return;
      }
      axios
        .post(
          "/doktor/pretrazi/" + this.klinika.id + "/" + this.datum,
          this.doktor
        )
        .then(response => {
          this.listaLekara = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    izlistajKliniku() {
      axios
        .get("/klinika/izlistaj/" + this.klinika.id)
        .then(response => {
          this.klinika = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    izlistajUDPreglede() {
      axios
        .get("/pregled/izlistajUDPreglede/" + this.klinika.id)
        .then(response => {
          this.udPregledi = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    izlistajTipovPregleda() {
      axios
        .get("/klinika/izlistajTipovePregleda/" + this.klinika.id)
        .then(response => {
          this.tipoviPregleda = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    rezervisi(pregled) {
      axios
        .put(
          "/pregled/reservisiUD/" + pregled.id + "/" + this.$store.state.user.id
        )
        .then(response => {
          //this.udPrelgedi = response.data;
          console.log(response.data);
          this.izlistajUDPreglede();
        })
        .catch(error => {
          console.log(error);
        });
    },

    izlistajLekare() {
      axios
        .get("/doktor/izlistajDoktere/" + this.klinika.id)
        .then(response => {
          this.listaLekara = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.klinika.id = this.$route.params.id;
    this.izlistajKliniku();
    this.izlistajUDPreglede();
    this.izlistajTipovPregleda();
    if (this.$store.state.lekari.length == 0) {
      this.izlistajLekare();
    } else {
      this.pretragaKlinika = true;
      this.listaLekara = this.$store.state.lekari;
      this.datum = this.$store.state.datum;
    }
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
.kontrole {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10px;
  margin-top: 20px;
  background-color: #f7f7f7;
}
</style>
