<template>
    <v-container class="card" id="about">
      <v-card flat class="padd grey darken-4">
        <v-card-title class="justify-center h2 white--text">ABOUT</v-card-title>
        <v-row class="mt-15 mobile-icons">
          <v-col cols="6" md="3" class="text-center" v-for="(icon, index) in about" :key="index">
            <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="" class="desktop">
            <v-icon x-large color="grey darken-4" class="amber rounded-circle pa-4 animate__animated animate__fadeInRightBig">{{icon.icon}}</v-icon>
            </v-lazy>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="" class="mobile">
            <v-icon medium color="grey darken-4" class="amber rounded-circle pa-2 animate__animated animate__fadeInRightBig ">{{icon.icon}}</v-icon>
            </v-lazy>
            <h3 class="white--text pt-3 h3">{{icon.title}}</h3>            
          </v-col>
        </v-row>
        <v-card max-width="100%" class="mt-10 mx-auto mb-10 pa-10">
          <v-row align="center" justify="center" class=" mx-auto my-auto desktop">
            <v-row>
              <v-col cols="6" md="6" class="my-auto">
                <v-row class="pa-5">
                  <v-progress-linear background-color="grey lighten-1" v-for="(lang, index) in languages" :key="index"  color="amber"  buffer-value="100" striped v-model="lang.knowledge" height="25" class="h4 "><strong class="lang amber pa-2">{{lang.name}}</strong><v-spacer></v-spacer><strong class="mr-2"> {{lang.knowledge}}%</strong></v-progress-linear>
                </v-row>
              </v-col>
              <v-col cols="6" md="6" class="mx-auto my-auto px-10">  
                <v-img src="../images/profile.jpg" class="img rounded-circle mx-auto"></v-img>              
                <p class="h4-1">I am a 23 year old male, I enjoy the outdoors as much as I Enjoy being indoors. Im always up for Video games or a camping trip. Ever since I was a kid I have loved computers. II've always been facinated by the newest technology, whether that be the next android or the next graphics card. I have a very supportive wife who looks for success in all we do. I am always looking for my next challenge. If I dont know how to do something, that is my next mission and goal.</p>          
              </v-col>
            </v-row>
          </v-row >
          <v-row align="center" justify="center" class=" mx-auto my-auto mobile">
            <v-row>
               <v-col cols="12" class="mx-auto my-auto px-1">  
                <v-img src="../images/profile.jpg" class="img rounded-circle mx-auto"></v-img>              
                <p class="h4-1 pt-4">I am a 23 year old male, I enjoy the outdoors as much as I Enjoy being indoors. Im always up for Video games or a camping trip. Ever since I was a kid I have loved computers. I've always been facinated by the newest technology, whether that be the next android or the next graphics card. I have a very supportive wife who looks for success in all we do. I am always looking for my next challenge. If I dont know how to do something, that is my next mission and goal.</p>          
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" class="my-auto">
                <v-row class="pa-0">
                  <v-progress-linear background-color="grey lighten-1" v-for="(lang, index) in languages" :key="index"  color="amber"  buffer-value="100" striped v-model="lang.knowledge" height="25" class="h4 "><strong class="lang amber pa-2">{{lang.name}}</strong><v-spacer></v-spacer><strong class="mr-2"> {{lang.knowledge}}%</strong></v-progress-linear>
                </v-row>
              </v-col>             
            </v-row>
          </v-row >
        </v-card>
      </v-card>
    </v-container>
</template>

<script>
  import {languages} from './DataFile.js'
  import {cards} from './DataFile.js'
  import {about} from './DataFile.js'
  export default {
    name: 'HomeView',

    components: {
      
    },
    data(){
      return{
        languages: languages,
        cards: cards,
        about: about
        
      }
    }
  }
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: white;
}
.animate__animated.animate__fadeInRightBig{
  animation-delay: .5s;
}
@media only screen and (min-width: 900px) {
  .h2{
    font-size: 4rem;
    text-decoration: underline;
    margin-top: 2%;
  }
  .h3{
    font-size: 2rem;
  }
  .h4{
    font-size: 1.5rem;
    border: 2px solid black;
    margin-top: 25px;
  }
  .h4-1{
    font-size: 1.5rem;
  }
  .card{
    margin-top: 30vh;

  }
  .lang{
    width: 22%;
  }
  .img{
    width: 225px;
    height: 225px;
  }
  .desktop{
    display: inline-block;
  }
  .mobile{
    display: none;
  }
  .padd{
    padding: 40px;
  }
}
@media only screen and (max-width: 900px) {
  .padd{
    padding: 10px;
  }
  .h2{
    font-size: 2.75rem;
    text-decoration: underline;
    margin-top: 2%;
  }
  .h3{
    font-size: 1rem;
  }
  .h4{
    font-size: 1.5rem;
    border: 2px solid black;
    margin-top: 25px;
  }
  .h4-1{
    font-size: 1rem;
  }
  .card{
    margin-top: 30vh;

  }

  .img{
    width: 150px;
    height: 150px;
  }
  .desktop{
    display: none;
  }
  .mobile{
    display: inline-block;
  }
  .mobile-icon{
    width: 100%;
  }
}
</style>
