<template>
  <div class="room-detail">
    <div class="container">
      <h4 class="trxt-center text-info mt-3">Room details</h4>
      <div class="card mt-5">
        <div class="card-header">
         Wellcome to room No: 
         {{ currentRoom.code }}
        </div>
        <div class="card-body">
          <h5 class="card-title">Created at: {{ new Date() }} </h5>
            <div class="card" style="width: 10rem;">
              <div class="card-header">
                Physical data
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item mt-1">
                    HT : 
                    <strong> 
                      {{ currentRoom.appointment.vital_signs.height_ft }}' 
                      {{ currentRoom.appointment.vital_signs.height_in }} ''
                    </strong> 
                </li>
                <li class="list-group-item mt-1">WT : 
                    <strong> 
                      {{ currentRoom.appointment.vital_signs.weight }} 
                    </strong> 
                </li>
                <li class="list-group-item mt-1">BMI :
                     <strong> 
                       {{ currentRoom.appointment.vital_signs.bmi }} 
                      </strong> 
                </li>
              </ul>
            </div>          
          <h2 class="card-text mt-3"> 
            {{ hasDoctore  }} 
          </h2>
        </div>
      </div>      
    </div>
    <div class="container mt-5">
        <div class="input-group-text mt-1" 
             v-for="consentForm in consentFormData"
             :key="consentForm.id"
            >
          <input type="checkbox" :value="consentForm.title" v-model="consentFormArr">
          <label class="ml-3"> {{ consentForm.title }} </label>
        </div>
        <span class="text-danger mt-5">Checked Titles : {{ consentFormArr }} </span> 
        <div class="container" v-if="consentFormArr.length > 0">
           <div class="btn btn-primary float-center mt-5">Sign in</div>  
        </div>    
    </div>
  </div>
</template>

<script>
import consentForms from '../assets/data/consent-forms.json'
import rooms from '../assets/data/rooms.json'
export default {
  name: 'RoomDetails',
  data: () => {
    return {
      currentRoom: null,
      roomData: rooms,
      consentFormData: consentForms,
      consentFormArr: [],
      getAppointment: []
    }
  },
  computed: {
    hasDoctore () {
     return this.currentRoom.appointment.hasOwnProperty.call(hasOwnProperty, 'is_doctor') ? this.currentRoom.appointment.doctor_title : 'Mr. ' + this.currentRoom.appointment.first_name + ' ' + this.currentRoom.appointment.last_name
  }
  },
  methods: {
    findCurrentRoom () {
      return this.roomData.find(room => {
          if(room.code === this.$route.params.id) {
            return this.currentRoom = room
          }
      })
    },
  hasOwnProperty () {
    return true;
  },
  // hasDoctore () {
  //    return console.log(this.currentRoom.hasOwnProperty.call(hasOwnProperty, 'code')) 
  // }
  showconsentFormArr ()  {
    console.log(this.consentFormArr.length)
  }  
  },
  created () {
    this.findCurrentRoom ()
    // this.hasDoctore ()
    this.showconsentFormArr ()
  }
}
</script>

<style scoped>

</style>