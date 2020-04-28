<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <div id="formHeader">
                <h1>Zdravstveni karton</h1>
            </div>

        <!--div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div-->
  
            <b-row  style="margin-top: 20px;" >
                <b-col sm="3">
                    <label for="Ime">Ime:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="pacijent.ime" disabled id="Ime" type="text"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="kolona">
                <b-col sm="3">
                    <label  for="Prezime">Prezime:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="pacijent.prezime" disabled id="Prezime" type="text"></b-form-input>
                </b-col>
            </b-row>
             <b-row class="kolona">
                <b-col sm="3">
                    <label for="Pol">Pol:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.pol" disabled id="Pol" type="text" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="kolona">
                <b-col sm="3">
                    <label for="KGrupa">Krva grupa:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.krvnaGrupa" disabled id="KGrupa"  type="text" ></b-form-input>
                </b-col>
            </b-row>             
            <b-row class="kolona">
                <b-col sm="3">
                    <label for="Visina">Visina:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.visina" disabled id="Visina" type="text" ></b-form-input>
                </b-col>
            </b-row>             
            <b-row class="kolona">
                <b-col sm="3">
                    <label for="Tezina">Težina:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.tezina" disabled id="Tezina" type="text" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="kolona">
                <b-col sm="3">
                    <label for="Dioptrija">Dioptrija:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.dioptrija" disabled id="Dioptrija" type="text" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="kolona">
                <b-col sm="3">
                    <label for="Alergije">Dioptrija:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="info.alergije" disabled id="Alergijr" type="text" ></b-form-input>
                </b-col>
            </b-row>
            <b-button-group style="border:black">
                <b-button v-b-modal.istorija class="pregledi">Istorija bolesti</b-button>
                <b-button class="pregledi">Posete lekaru</b-button>
            </b-button-group>
            
            <b-modal id="istorija" scrollable title="Pregled vasih alergija" ok-only>
             nesto pise
            </b-modal>
                    
        </div>
</div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                info:{},
                pacijent:{}
            }
        
        },
        methods: {
            izlistajPacijenta(){
               axios
              .get("/pacijent/izlistajPacijenta/" + this.$store.state.user.id)
              .then(response => {
                this.pacijent = response.data;
              })
              .catch(error => {
                console.log(error);
              });
            },
            izlistajKarton() {
               axios
              .get("/pacijent/izlistajKarton/" + this.$store.state.user.id)
              .then(response => {
                this.info = response.data;
              })
              .catch(error => {
                console.log(error);
              });
            }
        },
        mounted () {
            this.izlistajKarton();
            this.izlistajPacijenta();
        },
    }
</script>

<style scoped>
/* STRUCTURE */

.pregledi{
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #f2e3c4;
    color: black;
    
}

.kolona {
    margin-top: 10px;
    margin-bottom: 10px;
    
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;

}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #f7edd7;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formHeader {
  background-color:#f2e3c4;
  border-bottom: 1px solid #ebe0ca;
  padding: 20px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 10px 10px 0 0;
}

b-mofal{
    background: #f7edd7;
}
/* FORM TYPOGRAPHY*/

input[type=text] {
  background-color:#f2e3c4;
  border: none;
  color: #0d0d0d;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 92%;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
</style>