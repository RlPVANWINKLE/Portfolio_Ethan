<template>
    <nav >
        <v-app-bar fixed class="desktop">
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-bold amber--text under">Ethan</span>
                <span class=" grey--text under-1 grey--text text--darken-3">Strain</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span  class="mx-5 hover" @click="goto(navs.goto);" v-for="(navs, index) in nav" :key="index"><strong>{{navs.title}}</strong></span >
        </v-app-bar> 
        <v-toolbar app class="mobile">
            <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-bold amber--text under">Ethan</span>
                <span class=" grey--text under-1 grey--text text--darken-3">Strain</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar> 
        <v-navigation-drawer app v-model="menu" class="grey lighten-2" >
          <v-img  src='../images/profile.jpg' class="rounded-circle hover ma-5"  @click="menu = !menu"></v-img>
          <v-container class="" @click="menu = !menu">
            <h1 class="text-h3 text-decoration-underline text-center my-10">Menu</h1>
            <v-list >            
              <v-list-item
                v-for="(navs, i) in nav"
                :key="i"
                active-color="primary"
                variant="plain"
                @click="goto(navs.goto);"
                class="hover"
                >
                <v-list-item-title v-text="navs.title" ></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-container>
        </v-navigation-drawer>    
    </nav>
    
</template>
<script>
import {nav} from './DataFile.js'

export default {
    data(){
        return{
            menu: false,
            nav: nav,
            
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
@media only screen and (max-width: 900px) {
  .mobile{
    display: block;
  }
  .desktop{
    display: none;
  }
  .under{
    font-size: 1.75rem;
  }
  .under-1{
    font-size: 1.25rem;
  }

}
@media only screen and (min-width: 900px) {
.under{
  font-size: 3rem;  
  
}
.under-1{
  font-size: 2.125rem;  
}
.mobile{
    display: none;
  }
  .desktop{
    display: block;
  }
}
</style>

