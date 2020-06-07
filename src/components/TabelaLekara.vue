<template>
  <div>
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
            <b-form-datepicker id="example-datepicker"></b-form-datepicker>
          </th>
          <th scope="col">
            <b-button @click="rezervisi(pregled)">Detalji</b-button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    listaLekara: Array
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>