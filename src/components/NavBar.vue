<template>
    <nav >
        <v-app-bar fixed>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-bold amber--text under">Ethan</span>
                <span class=" grey--text under-1 grey--text text--darken-3">Strain</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span  class="mx-5 hover" @click="goto('home'); "><strong>Home</strong></span>|
            <span  class="mx-5 hover" @click="goto('about'); "><strong>AboutMe</strong></span>|
            <span  class="mx-5 hover" @click="goto('resume'); "><strong>My Resume</strong></span>|
            <span  class="mx-5 hover" @click="goto('work');"><strong>My Portfolio</strong></span>|
            <span class="mx-5 hover"  @click="goto('contact'); ;"><strong>Contact Me</strong></span>
        </v-app-bar> 
        <!-- <v-navigation-drawer app v-model="menu" class="grey lighten-2" >
          <v-img  src='../images/logo3.png' class="rounded-circle hover ma-5"  @click="menu = !menu"></v-img>
          <v-container class="" @click="menu = !menu">
            <h1 class="text-h3 text-decoration-underline text-center my-10 grey--text text--darken-3">Menu</h1>
            <v-list >            
              <v-list-item
                v-for="(link, i) in links"
                :key="i"
                active-color="primary"
                variant="plain"
                router :to="link.route"
                class="grey--text text--darken-3 font-weight-bold"
                >
                <v-list-item-avatar>
                  <v-icon >{{link.icon}}</v-icon>
                </v-list-item-avatar>
                <v-list-item-title v-text="link.text" ></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-container>
          
        </v-navigation-drawer>      -->
    </nav>
    
</template>
<script>


export default {
    data(){
        return{
            menu: false,
            
        }
    },
    methods:{
      goto(id){
        document.getElementById(id).scrollIntoView();
      }
    }
}
</script>
<style scoped>
.sticky_{
  position: sticky;
}

.hover:hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #FFC107;
  text-decoration-thickness: 5px;
}
@media only screen and (max-width: 600px) {
 .under{
  font-size: 1.75rem;
  
}
.under-1{
  font-size: 1.25rem;
  
}
}
@media only screen and (max-width: 1500px) {

}
@media only screen and (min-width: 600px) {
.under{
  font-size: 3rem;
  
  
}
.under-1{
  font-size: 2.125rem;
  
  
}
}
</style>

