<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <b-row>
      <b-col cols="3">
        <div>
          <b-card class="kontrole" title="Informacije o klinici">
            <div>
              <br />
              <h5><b>Naziv klinike:</b> {{ klinika.naziv }}</h5>
              <h6><b>Adresa: </b> {{ klinika.adresa }}</h6>
              <h6><b>Grad: </b> {{ klinika.grad }}</h6>
              <h6><b>Drzava: </b> {{ klinika.drzava }}</h6>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div>
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
              <tr v-for="(pregled, index) in udPrelgedi" :key="index">
                <th scope="col">{{ pregled.tip.naziv }}</th>
                <th scope="col">{{ pregled.cena }}</th>
                <th scope="col">{{ pregled.popust }}</th>
                <th scope="col">{{ pregled.trajanje }}</th>
                <th scope="col">{{ pregled.datum }} u {{ pregled.vreme }}</th>
                <th scope="col">
                  {{ pregled.sala.naziv }} {{ pregled.sala.broj }}
                </th>
                <th scope="col">
                  {{ pregled.doktor.ime }} {{ pregled.doktor.prezime }}
                </th>
                <th scope="col">
                  <b-button @click="rezervisi(pregled)">Reservisi</b-button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      klinika: {
        id: 0,
        adresa: "nestoo",
        naziv: "",
        grad: "",
        drzava: "",
      },
      udPrelgedi: [],
    };
  },
  methods: {
    izlistajKliniku() {
      axios
        .get("/klinika/izlistaj/" + this.klinika.id)
        .then((response) => {
          this.klinika = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    izlistajUDPreglede() {
      axios
        .get("/pregled/izlistajUDPreglede/" + this.klinika.id)
        .then((response) => {
          this.udPrelgedi = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    rezervisi(pregled) {
      axios
        .put(
          "/pregled/reservisiUD/" + pregled.id + "/" + this.$store.state.user.id
        )
        .then((response) => {
          //this.udPrelgedi = response.data;
          console.log(response.data);
          this.izlistajUDPreglede();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.klinika.id = this.$route.params.id;
    this.izlistajKliniku();
    this.izlistajUDPreglede();
    //console.log(this.klinika.id);
  },
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
.kartica {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 20px;
  padding-left: 10px;
  max-width: 880px;

  position: relative;
}
</style>
