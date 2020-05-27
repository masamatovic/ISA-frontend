<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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
            <b-col cols="8">
              <b-card-body :title="klinika.naziv">
                <h6 style="color:gray">
                  {{ klinika.adresa }}, {{ klinika.grad }}, {{ klinika.drzava }}
                </h6>
                {{ klinika.opis }}
              </b-card-body>
            </b-col>
            <b-col cols="2">
              <b-button @click="prikazi(klinika)" class="dugme"
                ><i class="fa fa-info"></i
              ></b-button>
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
    prikazi(klinika) {
      this.$router.push("/klinikaInfo/" + klinika.id);
    },
  },
  mounted() {
    this.ucitajKlinike();
  },
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
