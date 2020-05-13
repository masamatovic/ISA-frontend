<template>
  <div>
    <b-row>
      <b-col cols="4">
        <div>
          <b-card class="kontrole" title="Upravljanje ordinacijama">
            <div>
              <br />
              <h5>Sortiraj ordinacije po:</h5>
              <b-select v-model="sort" @change="sortirajPo(sort)">
                <option value="Ordinaciji">Ordinaciji</option>
                <option value="Datumu">Datumu</option>
              </b-select>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <b-card
          no-body
          v-for="(klinika, index) in klinike"
          :key="index"
          class="kartica"
        >
          <b-row>
            <b-col cols="2">
              <b-card-img
                class="rounded-0"
                src="https://image.flaticon.com/icons/svg/2760/2760841.svg"
                alt="Image"
              ></b-card-img>
            </b-col>
            <b-col cols="10">
              <b-card-body :title="klinika.naziv">
                <h6 style="color:gray">
                  {{ klinika.adresa }}, {{ klinika.grad }}, {{ klinika.drzava }}
                </h6>
                {{ klinika.opis }}
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sort: "",
      klinika: {
        naziv: "",
        grad: "",
        jmbg: "",
        adresa: "",
        drzava: "",
        opis: "",
      },
      klinike: [],
    };
  },
  methods: {
    ucitajKlinike() {
      axios
        .get("/klinika/izlistajSve")
        .then((response) => {
          this.klinike = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sortirajPo(vrednost) {
      axios
        .get("/klinika/sortiraj/" + vrednost)
        .then((response) => {
          this.klinike = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.ucitajKlinike();
  },
};
</script>

<style scoped>
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
