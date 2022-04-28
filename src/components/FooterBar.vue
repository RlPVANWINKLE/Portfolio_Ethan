<template>
    <v-container fluid  class="grey darken-2 text-center py-5">
        <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="" class="desktop">
        <span @click="goto('home')" class=""><v-icon x-large class="amber icon animate__animated animate__bounce hover rounded-circle" >mdi-arrow-up</v-icon></span>
        </v-lazy>
        <v-lazy v-model="isActive" :options="{ threshold: 0.5}" min-height="" class="mobile">
        <span @click="goto('home')" class=""><v-icon x-large class="amber icon animate__animated animate__bounce hover rounded-circle" >mdi-arrow-up</v-icon></span>
        </v-lazy>
        <v-row justify="center ">
            <v-col cols="12" md="4" class="mr-15 marg">
            </v-col>
            <v-vol cols="12" md="4" class="mx-15">
                <v-img src="../images/logo3.png" class="img rounded-circle mx-auto"></v-img>
                EthanStrain<span class="amber--text"><v-icon color="amber">mdi-copyright</v-icon>2022</span>
            </v-vol>
            <v-col cols="12" md="4" class="ml-15 marg ">
                <v-icon x-large color="white" class=" pa-2 mx-2 hover">mdi-linkedin</v-icon>
                <v-icon x-large color="white" class=" pa-2 mx-2 hover">mdi-facebook</v-icon>
                <v-icon x-large color="white" class=" pa-2 mx-2 hover">mdi-instagram</v-icon>
                <v-icon x-large color="white" class=" pa-2 mx-2 hover">mdi-twitter</v-icon>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    methods:{
      goto(id){
        document.getElementById(id).scrollIntoView();
      }
    }
}
</script>
<style scoped>

.hover:hover{
    cursor: pointer;
}
.animate__animated.animate__bounce{
    animation-duration: 1.5s;
    animation-iteration-count: 3;
    
}

@media only screen and (max-width: 900px) {
.icon{
    position: absolute;
    margin:-45px 0 0 -20px;
    border: 1px solid #FFC107;
}
.img{
    width: 175px;
    height: 175px;
    margin-bottom: 25px;
}
.marg{
    width: 60%;
    margin: 0% 10%;
}
.desktop{
    display: none;
}
.mobile{
    display: block;
}
}
@media only screen and (min-width: 900px) {
.icon{
    position: absolute;
    margin:-40px 0 0 -20px;
    border: 1px solid #FFC107;
}
.img{
    width: 175px;
    height: 175px;
    margin-bottom: 25px;
    margin-top: 25px;
}
.marg{
    margin-top:10%;
}
}

</style>