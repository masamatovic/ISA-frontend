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
      <b-col cols="4">
        <div>
          <b-card class="kontrole" title="Upravljanje klinikama">
            <div>
              <br />
              <h5>Sortiraj klinike po:</h5>
              <b-select v-model="sort" @change="sortirajPo(sort)">
                <option value="naziv">Nazivu</option>
                <option value="grad">Gradu</option>
              </b-select>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <b-form inline style=" margin-top: 20px;">
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            style="width:17%"
            placeholder="Naziv"
            v-model="klinika.naziv"
          ></b-input>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              style="width:17%"
              id="inline-form-input-surname"
              v-model="klinika.adresa"
              placeholder="Adresa"
            ></b-input>
          </b-input-group>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-dropdown
              text="Tip pregleda"
              split
              split-variant="outline-secondary "
              variant="secondary "
              v-model="tip"
            >
              <b-dropdown-item
                v-for="(tp, index) in tipoviPregleda"
                :key="index"
                href="#"
                @click="tip = tp"
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
        <b-card no-body v-for="(klinika, index) in klinike" :key="index" class="kartica">
          <b-row>
            <b-col cols="2">
              <b-card-img
                class="rounded-0"
                src="https://image.flaticon.com/icons/svg/2760/2760841.svg"
                alt="Image"
              ></b-card-img>
            </b-col>
            <b-col cols="8">
              <b-card-body :title="klinika.naziv">
                <h6
                  style="color:gray"
                >{{ klinika.adresa }}, {{ klinika.grad }}, {{ klinika.drzava }}</h6>
                {{ klinika.opis }}
              </b-card-body>
            </b-col>
            <b-col cols="2">
              <b-button @click="prikazi(klinika)" class="dugme">
                <i class="fa fa-info"></i>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
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
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 1);
    return {
      sort: "",
      klinika: {
        naziv: "",
        grad: "",
        adresa: "",
        drzava: "",
        opis: ""
      },
      klinike: [],
      tipPregleda: 0,
      pretraga: {
        naziv: "",
        adresa: ""
      },
      datum: "",
      tip: "",
      tipoviPregleda: [],
      min: minDate,
      doktor: {
        ime: "",
        prezime: "",
        tipPregleda: {
          naziv: ""
        }
      },
      listaLekara: [],
      poruka: ""
    };
  },
  methods: {
    pretrazi() {
      this.poruka = "";
      if (this.datum == "" || this.tip.naziv == "") {
        this.poruka = "Morate uneti datup i tip pregleda!";
        return;
      }
      axios
        .post(
          "/klinika/pretrazi/" + this.tip.naziv + "/" + this.datum,
          this.klinika
        )
        .then(response => {
          this.klinike = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    izlistajTipove() {
      axios
        .get("/tipPregleda/izlistaj")
        .then(response => {
          this.tipoviPregleda = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    ucitajKlinike() {
      axios
        .get("/klinika/izlistajSve")
        .then(response => {
          this.klinike = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    sortirajPo(vrednost) {
      axios
        .get("/klinika/sortiraj/" + vrednost)
        .then(response => {
          this.klinike = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    prikazi(klinika) {
      this.$store.commit("izbrisiLekare");
      this.$store.state.datum = "";
      if (this.datum != "") {
        this.doktor.tipPregleda = this.tip;
        console.log("doktor po kom vrsimo pretragu u klinici");
        console.log(this.doktor);
        axios
          .post(
            "/doktor/pretrazi/" + klinika.id + "/" + this.datum,
            this.doktor
          )
          .then(response => {
            this.listaLekara = response.data;
            this.$store.commit("dodajLekare", this.listaLekara);
            this.$store.state.datum = this.datum;
            console.log("lekari koji se salje");
            console.log(this.$store.state.lekari);

            this.$router.push("/klinikaInfo/" + klinika.id);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$router.push("/klinikaInfo/" + klinika.id);
      }
    }
  },
  mounted() {
    this.ucitajKlinike();
    this.izlistajTipove();
  }
};
</script>

<style scoped>
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
