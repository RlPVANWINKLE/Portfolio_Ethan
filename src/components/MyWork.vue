<template>
    <div id="work">
        <v-container >
            <v-card flat class=" grey darken-4 pa-10 width  " >
                <v-card-title class="justify-center h2 white--text" >PORTFOLIO</v-card-title>
                <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="200">
                <v-row class="mt-5 width" align="center" justify="center">
                        <v-card :class="`mx-2 wrap card-1 rounded-xl mt-5 animate__animated ${card.animation}`" v-for="(card, index) in cards" :key="index" router :href="card.href">
                        <v-img contain :src="card.pic" max-height=100% max-width=100% class="align-end ">
                        <v-card-title class="justify-center grey darken-2 amber--text mobile-title">{{card.title}}</v-card-title>
                        </v-img>
                        </v-card>
                </v-row>
                </v-lazy>
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
        cards: cards
        
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