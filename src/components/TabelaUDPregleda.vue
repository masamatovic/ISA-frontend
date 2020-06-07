<template>
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
</template>

<script>
import axios from "axios";

export default {
  props: {
    udPregledi: Array
  },
  methods: {
    rezervisi(pregled) {
      axios
        .put(
          "/pregled/reservisiUD/" + pregled.id + "/" + this.$store.state.user.id
        )
        .then(response => {
          //this.udPrelgedi = response.data;
          console.log(response.data);
          // this.izlistajUDPreglede();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>