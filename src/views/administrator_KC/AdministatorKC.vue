<template>
  <div>
    <b-row>
      <b-col>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Ime</th>
              <th scope="col">Prezime</th>
              <th scope="col">Email</th>
              <th scope="col">Adresa</th>
              <th scope="col">Grad</th>
              <th scope="col">Drzava</th>
              <th scope="col">Telefon</th>
              <th scope="col">JMBG</th>
              <th scope="col">Odobren</th>
              <th scope="col">Prihvati</th>
              <th scope="col">Odbi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(zahtev, index) in zahtevi" :key="index">
              <th scope="col">{{ zahtev.ime }}</th>
              <th scope="col">{{ zahtev.prezime }}</th>
              <th scope="col">{{ zahtev.email }}</th>
              <th scope="col">{{ zahtev.adresa }}</th>
              <th scope="col">{{ zahtev.grad }}</th>
              <th scope="col">{{ zahtev.drzava }}</th>
              <th scope="col">{{ zahtev.telefon }}</th>
              <th scope="col">{{ zahtev.jmbg }}</th>
              <th scope="col">{{ zahtev.odobren }}</th>
              <th scope="col">
                <b-button @click="prihvati(zahtev)">Prihvati</b-button>
              </th>
              <th scope="col">
                <b-button @click="odbij(zahtev)">Odbij</b-button>
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
export default {
  data() {
    return {
      zahtevi: [],
      zahtev: {},
      poruka: ""
    };
  },
  methods: {
    ucitajZahteve() {
      axios
        .get("/registracija/izlistajZahteve")
        .then(response => {
          this.zahtevi = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    prihvati(zahtev) {
      axios
        .put("/registracija/prihvatiZahtev", zahtev)
        .then(response => {
          console.log(response.data);
          this.ucitajZahteve();
        })
        .catch(error => {
          console.log(error);
        });
    },
    odbij(zahtev) {
      this.poruka = "losee";
      axios
        .put("/registracija/odbijZahtev/" + this.poruka, zahtev)
        .then(response => {
          console.log(response.data);
          this.ucitajZahteve();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.ucitajZahteve();
  }
};
</script>

<style scoped>
.table {
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 50px;
  padding-right: 30px;
}
</style>
