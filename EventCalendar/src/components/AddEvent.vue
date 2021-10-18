<template>
  <div class="col-12">
    <div class="card textcenter mt-3">
      <div class="card-header bg-primary text-white" @click="hidepanel=!hidepanel">
        <font-awesome-icon icon="plus" class="mr-3"/>Add Appointment
      </div>

      <div class="card-body" :class="{ 'd-none': hidepanel}">
        <form id="aptForm"
         @submit.prevent="requestAdd">
          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="evtName">Event Name</label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                name="evtName"
                id="evtName"
                placeholder="Event's Name"
                v-model="formData.evtName"
              >
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="evtType">Event Type</label>
            <div class="col-md-10">
              <input type="text" class="form-control" id="evtType" placeholder="Event Type" v-model="formData.evtType">
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="evtDate">Date</label>
            <div class="col-md-4">
              <input type="date" class="form-control" id="evtDate" v-model="formData.evtDate">
            </div>
            <label class="col-md-2 col-form-label text-md-right" for="evtTime">Time</label>
            <div class="col-md-4">
              <input type="time" class="form-control" name="evtTime" id="evtTime" v-model="formData.evtTime">
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 text-md-right" for="evtMessage">Event Description</label>
            <div class="col-md-10">
              <textarea
                class="form-control"
                rows="4"
                cols="50"
                name="evtMessage"
                id="evtMessage"
                placeholder="Description of the Event"
                v-model="formData.evtMessage"
              ></textarea>
            </div>
          </div>

          <div class="form-group form-row mb-0">
            <div class="offset-md-2 col-md-10">
              <button type="submit" class="btn btn-primary d-block">Add Appointment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
    name: "AddEvent",
    data() {
        return {
            formData: [],
            hidepanel: true
        }
    },
    components: {
        FontAwesomeIcon
    },
methods: {
    requestAdd: function () {
        this.formData = {
            evtName: this.formData.evtName,
            evtType: this.formData.evtType,
            evtDate: this.formData.evtDate + " " + this.formData.evtTime,
            evtMessage: this.formData.evtMessage,
        }
        
        this.$emit("addEvent", this.formData);
        this.hidepanel = true;
        this.formData=[];
    }
}
}
</script>

<style scoped>
    .card-header {
        cursor:pointer
    }
</style>