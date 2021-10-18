<template>
    <div class="col-12 col-md-10 col-lg-7">
    <div class="input-group my-3">
      <input
        id="SearchApts"
        placeholder="Search"
        type="text"
        class="form-control"
        aria-label="Search Appointments"
        v-model="searchTerms"
      >

      <div class="input-group-append">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#" @click="$emit('requestKey', 'evtName')">Name <font-awesome-icon icon="check" v-if="myKey==='evtName'"/></a></li>
            <li><a class="dropdown-item" href="#" @click="$emit('requestKey', 'evtType')">Event Type <font-awesome-icon icon="check" v-if="myKey==='evtType'"/></a></li>
            <li><a class="dropdown-item" href="#" @click="$emit('requestKey', 'evtMessage')">Description <font-awesome-icon icon="check" v-if="myKey==='evtMessage'"/></a></li>
            <hr>
            <li><a class="dropdown-item" href="#" @click="$emit('requestDir', 'asc')">Ascending <font-awesome-icon icon="check" v-if="myDir==='asc'"/></a></li>
            <li><a class="dropdown-item" href="#" @click="$emit('requestDir', 'desc')">Decending <font-awesome-icon icon="check" v-if="myDir==='desc'"/></a></li>
        </ul>
        
        </div>

        <div class="dropdown-menu dropdown-menu-right">
          <a href="#" class="dropdown-item d-flex justify-content-between" id="evtName">
            Event Name
            <font-awesome-icon icon="check"/>
          </a>

          <a class="dropdown-item d-flex justify-content-between" href="#" id="evtDate">
            Date
            <font-awesome-icon icon="check" v-if="myKey==='evtDate'"/>
          </a>

          <a href="#" class="dropdown-item d-flex justify-content-between" id="evtType">
            Type of Event
            <font-awesome-icon icon="check"/>
          </a>

          <div class="dropdown-divider" role="separator"></div>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="asc"
          >
            Asc
            <font-awesome-icon icon="check"/>
          </a>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="desc"
          >
            Desc
            <font-awesome-icon icon="check"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
    data() {
        return {
            searchTerms: ""
        }
    },
    watch:  {
        searchTerms: function() {
            this.$emit("searchRecords", this.searchTerms);
        }
    },
    props: [
        "myKey", "myDir"
    ],
    components: {
        FontAwesomeIcon
    }
}
</script>