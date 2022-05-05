<template>
    <div id="work">
        <v-container v-show="show" >
            <v-card flat class=" grey darken-4 pa-10 width  " >
                <v-card-title class="justify-center h2 white--text" >PORTFOLIO</v-card-title>
                <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="200">
                <v-row class="mt-5 width" align="center" justify="center">
                        <v-card :class="`mx-2 wrap card-1 rounded-xl mt-5 animate__animated ${card.animation}`" v-for="(card, index) in cards" :key="index" router @click="modalshow(card)">
                        <v-img contain :src="card.pic" max-height=100% max-width=100% class="align-end ">
                        <v-card-title class="justify-center grey darken-2 amber--text mobile-title">{{card.title}}</v-card-title>
                        </v-img>
                        </v-card>
                </v-row>
                </v-lazy>
            </v-card>
        </v-container>
        <v-container v-show="!show" class="mt-md-15">
          <v-card max-width="90vw" class="mx-auto border">
            <v-card-subtitle @click="show = true" class="text-md-h5 x"> <v-icon>mdi-close-outline</v-icon> close</v-card-subtitle>
            <v-row>
              <v-col cols="12" lg="6">
                <v-img contain :src="img" class="mx-auto mt-md-10 pa-15" ></v-img>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card-title class="text-xl-h3 text-md-h4 text-sm-h5 text-decoration-underline">{{title}}</v-card-title>
                <h2>Client:</h2><v-card-subtitle class="text-md-h5">{{client}}</v-card-subtitle>
                <v-divider></v-divider>
                <h2>Technologies:</h2> <v-card-subtitle class="text-md-h5">{{tech}}</v-card-subtitle>
                <v-divider></v-divider>
                <h2>Description:</h2> <v-card-text class="text-md-h5">{{description}}</v-card-text>
                <div class="text-center mb-md-10 mb-5">
                  <v-btn :href="href" class="" color="amber"> Visit</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

    </div>
</template>
  <script>
  import {cards} from './DataFile.js'
  export default {
    name: 'HomeView',

    components: {
      
    },
    data(){
      return{
        cards: cards,
        show: true,
        title: '',
        description: '',
        img: '',
        href:'',
        client: '',
        tech: ''
        
      }
    },
    methods:{
      modalshow(card){
        this.show = false;
        this.img = card.cover;
        this.title = card.title;
        this.description = card.description;
        this.href = card.href;
        this.client = card.client;
        this.tech = card.Technologies;
      }
    }
  }
</script>
<style scoped>
.wrap{
  display: flex;  
  flex-wrap: wrap;
}
.animate__animated{
    animation-delay: 0s;
    animation-duration: 1s;
}
.border{
  border: 5px solid #FFC107;
}
.x:hover{
  cursor: pointer;
}
@media only screen and (max-width: 900px) {
  .h2{
    font-size: 2.75rem;
    text-decoration: underline;
    margin-top: 20%;
  }
  .h4-1{
    font-size: 1.5rem;
  }
  .card-1{
    width: 25%;
    height: 125px;
    border: 5px solid white;
  }
  .card-1:hover{
    cursor: pointer;
  }
  .mobile-title{
    display: none;
  }

}
@media only screen and (min-width: 900px) {
  .h2{
    font-size: 4rem;
    text-decoration: underline;
    margin-top: 20%;
  }
  .h4-1{
    font-size: 1.5rem;
  }
  .card-1{
    width: 25%;
    height: 225px;
    border: 5px solid white;
    
  }

}
</style>