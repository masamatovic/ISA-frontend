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
<div class="form-row">
              <div class="form group">
                  
              </div>
          </div>