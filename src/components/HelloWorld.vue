<template>
  <div class="hello">
    <h1>Dodala sam ovoooooo</h1>
    <button v-on:click="pozdrav()" type="button">Click Me!</button>
    <h2>cao od : {{ prom }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      prom: ""
    };
  },

  methods: {
    pozdrav() {
      //var self=this;
      //this.prom="masa";
      axios
        .get("/pozdrav/masa")
        .then(ime => {
          this.prom = ime.data;
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
