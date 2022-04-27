<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="grey darken-4">
      <router-view/>
    </v-main>
    <footer-bar/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components:{
    NavBar,
    FooterBar,
  }
};
</script>
<style >
body{
  font-family: 'Chivo', sans-serif;
  font-family: 'Lato', sans-serif;
  font-family: 'Lobster', cursive;
}
</style>

