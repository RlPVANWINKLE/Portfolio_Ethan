<template>
  <v-container >
    <v-row align="center" justify="center"> 
      <v-col cols="6" md="4">
        <h1 class=" h1 white--text text-left animate__animated animate__backInRight " >  Hello, <br> I'm Ethan  </h1>
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
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title v-for="(lang, index) in languages" :key="index" class="text-center h4 amber py-2">{{lang}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
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
          fill-dot
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.date"
            ></span>
          </template>
          <v-card :color="year.color" dark>
            <v-card-title> {{year.job}} - {{year.company}}</v-card-title>
            <v-card-text class="white grey--text text--darken-4">
              <p>{{year.description}}</p>
            </v-card-text>
          </v-card>
          <!-- <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{year.job}} - {{year.company}}
            </h2>
            <div>
              {{year.description}}
            </div>
          </div> -->
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-container>
</template>

<script>
  

  export default {
    name: 'HomeView',

    components: {
      
    },
    data(){
      return{
        languages: ['C++', 'C#','HTML','CSS','JavaScript','Vue.js','Java'],
        tree:[
          {
            job: 'Customer Service Representative',
            company: 'Dominos Pizza',
            icon: 'mdi-briefcase-outline',
            description: 'Helped build pizza',
            color: 'amber',
            color2: '#FFC107',
            date: '07/2014 - 08/2015'
          },
          {
            job: 'Customer Service Representative',
            company: 'Dominos Pizza',
            icon: 'mdi-briefcase-outline',
            description: 'Helped build pizza',
            color: 'amber',
            color2: '#FFC107',
            date: '07/2014 - 08/2015'
          },{
            job: 'Customer Service Representative',
            company: 'Dominos Pizza',
            icon: 'mdi-briefcase-outline',
            description: 'Helped build pizza',
            color: 'amber',
            color2: '#FFC107',
            date: '07/2014 - 08/2015'
          },
          {
            job: 'Customer Service Representative',
            company: 'Dominos Pizza',
            icon: 'mdi-briefcase-outline',
            description: 'Helped build pizza',
            color: 'amber',
            color2: '#FFC107',
            date: '07/2014 - 08/2015'
          },
        ]
      }
    }
  }
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: white;
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