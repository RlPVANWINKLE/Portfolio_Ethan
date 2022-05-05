<template>
  <v-container app id="home" >
    <v-row align="center" justify="center"> 
      <v-col cols="6" md="4">
        <h1 class=" h1 white--text text-left animate__animated animate__fadeInLeft " >  Hello, <br> I'm Ethan  </h1>
      </v-col>
      <v-col cols="6" md="4">
        <v-img src="../images/profile.png" class="rounded-circle h1 img animate__animated animate__rubberBand" max-width="100%"></v-img>
      </v-col>
    </v-row>
    <about-me/> 
    <my-resume/>    
    <my-projects ></my-projects>/>
    <contact-me/>
  </v-container>
  
</template>

<script>
  import MyProjects from '../components/MyWork.vue'
  import AboutMe from '../components/AboutView.vue'
  import ContactMe from '../components/ContactView.vue'
  import MyResume from '../components/MyResume.vue'
  
  export default {
    name: 'HomeView',

    components: {
      MyProjects,
      AboutMe,
      ContactMe,
      MyResume,
      
    },
    data(){
      return{
        
      }
    },
    
  }
</script>
<style scoped>
@media only screen and (min-width: 600px) {
 .h1{
  font-size: 8rem;
  margin-top: 20vh;
  text-decoration: underline;
  }

}
@media only screen and (max-width: 600px) {
 .h1{
  font-size: 8rem;
  margin-top: 20vh;
  text-decoration: underline;
  }

}
.animate__animated.animate__backInRight{
  --animate-duration: 3s;
}
.img{
  border: 5px solid #FFC107;
}
</style>