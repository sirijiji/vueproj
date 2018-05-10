<template>

<div id="addPostForm">

<titlehero></titlehero>
 
    
    <section class="section">
      
    <div class="container">
        

        <label class="label">Title</label>
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

import vuerouter from 'vue-router'
import AppPost from './AppPost'
import config from '../config.js';
import moment from '../../node_modules/moment/moment.js'
require('moment/moment.js');
require('vue-toastr/src/vue-toastr.less');

const routes = [ 
  {path:'/', component: AppPost}
]
const router = new vuerouter({
  routes // short for routes: routes
})

    module.exports = {
        name: 'addpostform',
        data: function(){
            return { subject:'', text:''}
        },
        methods: {
            
            submitForm:function(){
                var vm = this;
                //this.$router.go(this.$router.currentRoute)
                 

            this.axios({
                method:'post',
                url:'note',
                auth: config.authAxios,
                data:{title:vm.subject, content:vm.text, creationDate: moment()}
            }).then(function() {
             
                    vm.$refs.toastr.Add({
                        title: "SUCCESS MESSAGE",
                        msg: "Post successfully added",
                        clickClose: true, // Click Close Disable
                        timeout: 1000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "success",
                        onClosed: function(){
                            router.push({path:'/app'});
                        }
                    });
              })
            

            }
        }
    }
</script>
<style></style>