<template>
    <div>
        <v-container class="">
            <v-card class=" pa-10" >
                <v-card-title class="justify-center h2 grey--text text--darken-2">My Projects</v-card-title>
                <v-row>
                <v-card  hover tile class="mt-10 mx-auto wrap card-1" v-for="(card, index) in cards" :key="index" router :href="card.href">
                <v-img contain rounded :src="card.pic" class="align-end card-img">
                <v-card-title class="justify-center grey darken-2 white--text" border="top"  >{{card.title}}</v-card-title>
                </v-img>
                </v-card>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>
<script>
  import {cards} from '../components/DataFile.js'
  export default {
    name: 'HomeView',

    components: {
      
    },
    data(){
      return{
        cards: cards
        
      }
    }
  }