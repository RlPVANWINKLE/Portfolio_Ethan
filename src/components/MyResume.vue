<template>
    <div>
      <!-- -->
        <v-container id="resume">
            <h2 class="text-center h2 white--text">RESUME</h2>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" >
                <v-timeline-item
                v-for="(year, i) in tree"
                :key="i"
                :color="year.color"
                :icon="year.icon"
                fill-dot>
                <template v-slot:opposite>
                    <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.date"
                    ></span>
                </template>
                <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="200">
                <v-card :color="year.color" dark :class="`animate__animated ${year.animation}`">
                    <v-card-title> {{year.job}} - {{year.company}}</v-card-title>
                    <v-card-text class="white grey--text text--darken-4">
                    <!-- <p>{{year.description}}</p> -->
                    <ul>
                        <li v-for="(i, index) in year.description" :key="index">{{year.description[index]}}</li>
                    </ul>
                    </v-card-text>
                </v-card>
                </v-lazy>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>
<script>
import {tree} from './DataFile.js'
export default {
    components:{
        
    },
    data(){
        return{
            tree: tree,
        }
    }
    
}
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: white;
}
@media only screen and (min-width: 900px) {
  .h2{
    font-size: 4rem;
    text-decoration: underline;
    margin-top: 20%;
  }
}
@media only screen and (max-width: 900px) {
  .h2{
    font-size: 2.75rem;
    text-decoration: underline;
    margin-top: 20%;
  }
}
</style>