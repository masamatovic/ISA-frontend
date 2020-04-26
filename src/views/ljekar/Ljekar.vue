<template>
  <div id="doctorHome">
      <!-- FORM docor info-->
      <form>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorName">Ime doktora: </lable>
                  <input type="text" id="doctorName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorSurname">Prezime doktora: </lable>
                  <input type="text" id="doctorSurname"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorEmail">Email doktora: </lable>
                  <input type="text" id="doctorEmail"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorAdress">Adresa doktora: </lable>
                  <input type="text" id="doctorAdress"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorCity">Grad doktora: </lable>
                  <input type="text" id="doctorName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorState">Drzava doktora: </lable>
                  <input type="text" id="doctorState"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorPhone">Telefon doktora: </lable>
                  <input type="text" id="doctorPhone"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="doctorJMBG">JMBG doktora: </lable>
                  <input type="text" id="doctorJMBG"/>
              </div>
          </div>
          <div>
              <button class="btn" v-on:click="change_enable" v-if="!enable">Izmjeni podatke</button>
              <button class="btn" v-on:click="save_data" v-else>Sacuvaj podatek</button>
              <button class="btn" v-if="!enable" v-b-modal.modal_password>Izmjeni lozinku</button>
          </div>
          <b-modal id="modal_password" title="Izmjena lozinke">
              <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group  label="Stara lozinka:"  label-for="staraL" invalid-feedback="Name is required">
                        <b-form-input id="staraL"  required></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Nova lozinka:"  label-for="novaL" invalid-feedback="Name is required">
                        <b-form-input id="novaL"  required></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Ponovi novu lozinku:"  label-for="ponovljenjaL" invalid-feedback="Name is required">
                        <b-form-input id="ponovljenjaL"  required></b-form-input>
                    </b-form-group>
                </form>
          </b-modal>
      </form>
      <!--end form-->
      <!--list of doctor's pacients-->
      <div id="pacientList">
          <ul>
              <li v-for="pacient in allPacients">{{pacient}}</li>
          </ul>
      </div>
      <!--end list all pacients-->
      <!--TODO: appointmetn page link-->
      <!--TODO:calendar-->
      <!--TODO:holiday request-->
      <!--TODO:booking of appointments-->


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>