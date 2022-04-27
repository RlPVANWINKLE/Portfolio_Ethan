<template>
    <div id="contact">
        <v-form class="grey darken-4 ">
            <v-container>
                <v-card-title class=" rounded justify-center h2 white--text" >CONTACT</v-card-title>
                <v-card class="mx-auto my-16 py-10 myclass animate__animated animate__pulse">
                    <h1 class="text-center text-decoration-underline">How Can I Help You?</h1>
                    <v-row align="center" justify="center">
                        <v-col cols="5" md="5">
                            <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            label="First Name"
                            required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="5" md="5">
                            <v-text-field
                            v-model="lastname"
                            :rules="nameRules"
                            :counter="10"
                            label="Last Name"
                            required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="5" md="5">
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="5" md="5">
                            <v-text-field
                            v-model="phone"
                            :rules="phoneRules"
                            label="Phone Number"
                            required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                    <v-col cols="10" md="10">
                        <v-textarea
                            v-model="comments"
                            :rules="textRules"
                            :counter="250"
                            label="Additional Comments"
                            filled
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" @click="submit(firstname)">
                    <v-btn color="#FFC107">
                        Submit
                    </v-btn>
                </v-row>
                </v-card>
            </v-container>
        </v-form>

    </div>
</template>

<script>
export default {
    data(){
        return{
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            textRules:[
                v => v.length <= 250 || 'Please keep under 250 characters'
            ],
            phone: '',
            comments: ''
            
        }
    },
    methods:{
        submit(firstname){
            alert('Thank-you ' + firstname.toUpperCase() + '. We will get back to you within 24 business hours!')
            this.$refs.form.reset();
        }
    }
}
</script>
<style scoped>
.h2{
    font-size: 4rem;
    text-decoration: underline;
    margin-top: 20%;
  }
.myclass.v-sheet.v-card{
    border: 8px solid #FFC107;
}
@media only screen and (max-width: 600px) {
.myclass{
    width: 95%;
}
.text---{
    font-size: .95rem;
}
}
@media only screen and (max-width: 1500px) {

}
@media only screen and (min-width: 600px) {
.myclass{
    width: 60%;
}
.text---{
    font-size: 1.50rem;
}
}
</style>