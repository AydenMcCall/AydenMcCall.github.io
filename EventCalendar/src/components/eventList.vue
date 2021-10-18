<template>
    <div>
        <div v-for="event in eventList" :key="event.evtIndex">
            <div class="bg-light box-shadow mb-5">
                <div class="ms-3">
                    <div class="d-flex justify-content-between">
                        <h2 contenteditable="contenteditable"
                        @blur="$emit('edit', event.evtId, 'evtName', $event.target.innerText)">
                            {{event.evtName}}</h2>
                        <button class="bg-danger" @click="$emit('remove', event)">
                            <font-awesome-icon icon="trash" style="font-size: 1.25em"/> 
                        </button>
                    </div>
                    
                    <h5 contenteditable="contenteditable"
                    @blur="$emit('edit', event.evtId, 'evtType', $event.target.innerText)">
                        {{event.evtType}}</h5>
                    <p contenteditable="contenteditable"
                    @blur="$emit('edit', event.evtId, 'evtMessage', $event.target.innerText)">
                        {{event.evtMessage}}</p>
                    <p class="text-end me-3">
                        {{formattedDate(event.evtDate)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 import moment from "moment";
 import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: 'EventList',
    props: ["eventList"],
    methods: {
        formattedDate: function (date) {
            return moment(new Date(date)).format("MMM-Do ha");
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
    .box-shadow {
        box-shadow: 5px 5px rgb(0, 0, 0, .15);
    }
</style>
