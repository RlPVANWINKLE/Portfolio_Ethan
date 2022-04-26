<template>
  <v-container >
    <v-row align="center" justify="center"> 
      <v-col cols="6" md="4">
        <h1 class=" h1 white--text text-left animate__animated animate__fadeInLeft " >  Hello, <br> I'm Ethan  </h1>
      </v-col>
      <v-col cols="6" md="4">
        <v-img src="../images/profile.png" class="rounded-circle h1" max-width="100%"></v-img>
      </v-col>
    </v-row>
    <v-container class="card">
      <v-card class="grey pa-10">
        <v-card-title class="justify-center h2 white--text">A little about me</v-card-title>
        <v-card max-width="60%" class="mt-10 mx-auto">
          <v-row align="center" justify="center" class="white mx-auto my-auto">
            <v-row class="mt-2">
              <v-col>
                <v-card-subtitle class="text-center h3">My Languages:</v-card-subtitle>
              </v-col>
              <v-col>
                <v-card-subtitle class="text-center h3">My College Life:</v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="6">
                <v-row class="pa-5">
                  <v-progress-linear v-for="(lang, index) in languages" :key="index" color="amber lighten-2" buffer-value="0" v-model="lang.knowledge" stream height="25" class="h4 "><strong>{{lang.name}} - {{lang.knowledge}}%</strong></v-progress-linear>
                </v-row>
              </v-col>
              <v-col cols="6" md="6" class="mx-auto my-auto px-10">                
                <p class="h4-1">I have been going to college since 2014, I have had a few different routes of possible career paths. I have landed on Programming and software development. I have enjoyed the challenge of coding and trying to solve a puzzle. I have a Personal goal of looking at all coding problems as a challenge instead of an actual problem. </p>          
              </v-col>
            </v-row>
          </v-row >
        </v-card>
      </v-card>
    </v-container>
    <v-container>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
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
              <p>{{year.description}}</p>
            </v-card-text>
          </v-card>
          </v-lazy>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container class="card">
      <v-card class="grey pa-10" >
        <v-card-title class="justify-center h2 white--text">My Projects</v-card-title>
        <v-row>
          <v-card hover max-width="25%" tile class="mt-10 mx-auto wrap" v-for="(card, index) in cards" :key="index">
          <v-img :src="card.pic" class="align-end">
          <v-card-title class="justify-center white">{{card.title}}</v-card-title>
          </v-img>
        </v-card>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
  
</template>

<script>
  import {languages} from '../components/DataFile.js'
  import {tree} from '../components/DataFile.js'
  import {cards} from '../components/DataFile.js'
  export default {
    name: 'HomeView',

    components: {
      
    },
    data(){
      return{
        languages: languages,
        tree: tree,
        cards: cards
        
      }
    }
  }
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: white;
}
.wrap{
  display: flex;  
  flex-wrap: wrap;
}
@media only screen and (min-width: 600px) {
 .h1{
  font-size: 8rem;
  margin-top: 20vh;
  text-decoration: underline;
  }
  .h2{
    font-size: 4rem;
    text-decoration: underline;
  }
  .h3{
    font-size: 2rem;
  }
  .h4{
    font-size: 1.5rem;
    border-top: 1px solid black;
    margin-top: 15px;
  }
  .h4-1{
    font-size: 1.5rem;
  }
  .card{
    margin-top: 20vh;

  }
}
.animate__animated.animate__backInRight{
  --animate-duration: 3s;
}
</style>