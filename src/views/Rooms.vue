<template>
  <div class="room">
    <div class="container">
      <h4 class="trxt-center text-info mt-5">Rooms</h4>
      <div class="container-fluid mt-5">
        <div 
            class="card text-center mt-3"
            v-for="room in roomData"
            :key="room.code"
            >
          <div class="card-header">
            <div class="card-title"> 
                Room No: 
                  {{ room.code }} ( {{ room.appointment.code }} ) 
            </div>
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active">
                    {{ room.status.title }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                    Start time: 
                    {{ room.appointment.start_time }}
                 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">
                    Pending time: 
                    {{ room.appointment.start_time }} 
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">
                Pacient:  
                {{ room.appointment.first_name }} 
                {{ room.appointment.last_name }} 
            </h5>
            <h6 class="card-text mt-1"> 
                Doctor :
                {{ room.appointment.doctor_title }} 
            </h6>
            <h6 class="card-text mt-1"> 
                Assistent : 
                {{ room.appointment.assistant }} 
            </h6>

            <router-link 
                :to=" { name: 'RoomDetails', params: { id: room.code } } " 
                tag="button" 
                class="btn btn-primary mt-3"
                >View 
            </router-link>
            
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import rooms from '../assets/data/rooms.json'
export default {
  name: 'Rooms',
  data: () => {
    return {
      roomData: rooms
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  border-radius: 0%;
}
</style>
