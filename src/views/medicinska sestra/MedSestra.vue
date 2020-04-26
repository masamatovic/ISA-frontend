<template>
  <div id="medicalNurseHome">
      <!--medical nurse info-->
      <form>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseName">Ime medicinkse sestre: </lable>
                  <input type="text" id="medNurseName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseSurname">Prezime medicinkse sestre: </lable>
                  <input type="text" id="medNurseSurname"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseEmail">Email medicinkse sestre: </lable>
                  <input type="text" id="medNurseEmail"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseAdress">Adresa medicinkse sestre: </lable>
                  <input type="text" id="medNurseAdress"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseCity">Grad medicinkse sestre: </lable>
                  <input type="text" id="medNurseName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseState">Drzava medicinkse sestre: </lable>
                  <input type="text" id="medNurseState"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNursePhone">Telefon medicinkse sestre: </lable>
                  <input type="text" id="medNursePhone"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <lable for="medNurseJMBG">JMBG medicinkse sestre: </lable>
                  <input type="text" id="medNurseJMBG"/>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>