<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> BASE CODE -->

<template>
  <div id="main-app" class="container">
    <search-events @searchRecords="addSearchTerms" @requestKey="changeKey" @requestDir="changeDir" :myKey="filterKey" :myDir="filterDir"/>
    <add-event @addEvent="addEvent" />
    <br> <br> <br>
    <event-list :eventList="filteredEvents" @remove="removeItem" @edit="editItem" />
    
    
  </div>
</template>

<script>
import _ from "lodash"
import axios from 'axios'

import EventList from './components/eventList.vue'
import AddEvent from './components/AddEvent.vue'
import SearchEvents from './components/SearchEvents.vue'


export default {
  name: "MainApp",
  data: function() {
    return {
      events: [],
      searchTerms: "",
      filterKey: "evtName",
      filterDir: "asc",
      evtIndex: 0
    };
  },
  components: {
    EventList,
    AddEvent,
    SearchEvents
  },
  computed: {
    searchedEvents: function() {
      return this.events.filter(event => {
        return(
          event.evtName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          event.evtType.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          event.evtDate.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          event.evtMessage.toLowerCase().match(this.searchTerms.toLowerCase())
        )
      })
    },
    filteredEvents: function () {
      return _.orderBy(
        this.searchedEvents,
        event => {
          return event[this.filterKey].toLowerCase();
        }, this.filterDir
      )
    }
  },
  mounted() {
    axios.get("./data/eventList.json")
      .then(response => (this.events = response.data.map(event => {
        event.evtId = this.evtIndex;
        this.evtIndex++;
        return event;
      })));
  },
  methods: {
    changeKey: function (value) {
      this.filterKey = value;
    },
    changeDir: function (value) {
      this.filterDir = value;
    },
    addSearchTerms: function(terms) {
      this.searchTerms = terms;
    },
    removeItem: function (event) {
      this.events = _.without(this.events, event);
    },
    editItem: function (id, field, text) {
      const extIndex = _.findIndex(this.events, {
        evtId: id
      });
      this.events[extIndex][field] = text;
    },
    addEvent: function(event) {
      event.evtId = this.evtIndex;
      this.evtIndex++;
      this.events.push(event);
    },
  }
};

</script> 

<style>
  #main-app {
    background-color:rgb(255, 255, 255, .8);
    padding: 30px;
  }
</style>