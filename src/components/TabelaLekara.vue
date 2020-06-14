<template>
  <div>
    <b-form inline style=" margin-top: 20px;">
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        style="width:20%"
        placeholder="Ime"
        v-model="doktor.ime"
      ></b-input>
      <b-input-group style="width:20%" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-surname" v-model="doktor.prezime" placeholder="Prezime"></b-input>
      </b-input-group>
      <b-input-group style="width:20%" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          id="inline-form-input-range"
          v-model="doktor.tipPregleda.naziv"
          placeholder="Tip pregleda"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0"></b-input-group>
      <b-button
        variant="secondary "
        style="margin-left: 5px;"
        @click="filtriraj()"
      >Zavrsi filtraciju</b-button>
    </b-form>
    <!--TabelaLekara v-bind:listaLekara="listaLekara"></TabelaLekara-->
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Ime</th>
          <th scope="col">Prezime</th>
          <th scope="col">Tip pregleda</th>
          <th scope="col">Datum i vreme</th>
          <th scope="col">Detalji</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lekar, index) in filtritaniDoktori" :key="index">
          <th scope="col">{{ lekar.ime }}</th>
          <th scope="col">{{ lekar.prezime }}</th>
          <th scope="col">{{ lekar.tipPregleda.naziv }}</th>
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
</template>

<script>
export default {
  props: {
    listaLekara: Array
  },
  computed: {
    filtritaniDoktori: function() {
      return this.listaLekara.filter(lekar => {
        return (
          lekar.prezime.match(this.doktor.prezime) &&
          lekar.ime.match(this.doktor.ime) &&
          lekar.tipPregleda.naziv.match(this.doktor.tipPregleda.naziv)
        );
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