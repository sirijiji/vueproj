<template>

<div id="addPostForm">

<titlehero></titlehero>
 
    <navmenu></navmenu>
    <section class="section">
      
    <div class="container">
        <label class="label">Name</label>
        <p class="control">
        <input v-model="name" class="input" type="text" placeholder="Text input">
        
        </p>
        

        <label class="label">Subject</label>
        <p class="control has-icon has-icon-right">
        <input v-model="subject" class="input is-success" type="text" placeholder="Text input" >
        
        </p>

        <label class="label">Message</label>
        <p class="control">
        <textarea v-model="text" class="textarea" placeholder="Textarea"></textarea>
        </p>


        <div class="control is-grouped">
        <p class="control">
            <button v-on:click="submitForm()" class="button is-primary">Submit</button>
        </p>
        <p class="control">
            <button  class="button is-link">Cancel</button>
        </p>

        <vue-toastr ref="toastr"></vue-toastr>
        </div>       
    </section>
    <footerblog></footerblog>
    </div>
</template>
<script>
import Vue from 'vue'
import toastr from 'vue-toastr'
import vuerouter from 'vue-router'
import AppPost from './AppPost'

require('vue-toastr/src/vue-toastr.less');

// Register vue component
Vue.component('vue-toastr',toastr);

const routes = [ 
  {path:'/', component: AppPost}
]
const router = new vuerouter({
  routes // short for routes: routes
})

    module.exports = {
        name: 'addpostform',
        data: function(){
            return {name:'', subject:'', text:''}
        },
        methods: {
            
            submitForm:function(){
                var vm = this;
                firebase.database().ref('posts/' + this.name).set({
                    username: this.name,
                    subject: this.subject,
                    text: this.text,
                    createdAt : firebase.database.ServerValue.TIMESTAMP
                }).then(function(){
                    
                     vm.$refs.toastr.Add({
                        title: "SUCCESS MESSAGE",
                        msg: "Post successfully added",
                        clickClose: true, // Click Close Disable
                        timeout: 5000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "success",
                        onClosed: function(){
                            router.push({path:'/'});
                        }
                    });

                    

                }, function(err){
                    toastr.error('Error', ' the post could not be added', {timeOut: 3000})
                });
            }
        }
    }
</script>
<style></style>