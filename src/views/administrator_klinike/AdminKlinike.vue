<template>
  <div id="adminKlinke">
      <!--form for change of hospitaj data-->
      <form>
          <div class="form-row">
              <div class="form group">
                  <label for="clinicName">Naziv kliniek:</label>
                  <input type="text" id="clinicName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form group">
                  <label for="clinicAdress">Adresa kliniek:</label>
                  <input type="text" id="clinicAdress"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form group">
                  <label for="clinicDescription">Opis:</label>
                  <input type="text" id="clinicDescription"/>
              </div>
          </div>
          <!--TODO: free appointment days-->
          <div class="form-row">
              <div class="form group">
                  <label for="clinicDoctorList">Spisak ljekara:</label>
                  <select id="clinicDoctorList" >
                      <option  v-for="doctor in allDoctors":value="doctor">{{doctor}}

                      </option>
                  </select>
              </div>
          </div>
          <div class="form-row">
              <div class="form group">
                  <label for="clinicOperationRoom">Spisak sala:</label>
                  <select id="clinicOperationRoom">
                      <option v-for="operRoom in allOPerRooms":value="operRoom">
                          {{operRoom}}
                      </option>
                  </select>
              </div>
          </div>
          <!--TODO:cjenovinik-->
      </form>
      <!-- end form-->
      <!--form appointment information setup-->
      <form>
          <div id="appointInfo" class="form-row">
            <div class="form group">
                <!--TODO:date for appointment-->  
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="appointType">Tip pregleda:</label>
                    <input type="text" id="appointType"/>
                </div>    
            </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="appointTime">Trajanje pregleda:</label>
                  <input type="text" id="appointTime"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <select>
                      <option v-for="operRoom in allOPerRooms":value="operRoom">
                          {{operRoom}}
                      </option>
                  </select>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <select>
                      <option v-for="doctor in allDoctors":value="doctor">
                          {{doctor}}
                      </option>
                  </select>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="appointPrice">Cijena pregleda:</label>
                  <input type="number" id="appointPrice"/>
              </div>
          </div>
      </form>
      <!--end form-->
      <!-- form business info-->
      <form>
          <div class="form-row">
              <div class="form-group">
                  <label for="clinicMark">Prosjecna ocjena klinike: {{clinic.mark}}</label>
              </div>
          </div>
          <div class="form-row">
              <table class="table">
                  <thead>
                    <th>Ime ljekara</th>
                    <th>Prosjecna ocjena<th>
                  </thead>
                  <tbody>
                      <tr v-for="doctor in allDoctros">
                          <td>{{doctor}}</td>
                      </tr>
                  </tbody>
                </table>
            </div>
            <!--TODO: graphic showing of appointments-->
            <div class="form-row">
                <div class="form-group">
                    <!--TODO: picking up a date -->
                    <label for="clinicIncome">Prihodi klinike: {{clinic.income}}</label>
                </div>
            </div>
      </form>
      <!--end form-->
      <!--form presonal data-->
      <form>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicName">Ime:</label>
                  <input type="text" id="adminClinicName"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicSurname">Prezime:</label>
                  <input type="text" id="adminClinicSurname"/>
              </div>
          </div>
            <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicEmail">Email:</label>
                  <input type="text" id="adminClinicEmail"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicPassword">Sifra:</label>
                  <input type="text" id="adminClinicPassword"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicAdress">Adresa:</label>
                  <input type="text" id="adminClinicAdress"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicCity">Grad:</label>
                  <input type="text" id="adminClinicCity"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicState">Drzava:</label>
                  <input type="text" id="adminClinicState"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicPhone">Telefon:</label>
                  <input type="text" id="adminClinicPhone"/>
              </div>
          </div>
          <div class="form-row">
              <div class="form-group">
                  <label for="adminClinicJMBG">JMBG:</label>
                  <input type="text" id="adminClinicJMBG"/>
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
      <!-- end form-->

    
  </div>
</template>

<script>
export default {
    data(){
        return{

        }

    }// data admin klinike
}


</script>

<style></style>
