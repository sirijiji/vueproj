<template>
  
  <div>
    <titlehero></titlehero>
    <vue-toastr ref="toastr"></vue-toastr>
  <div class="container">
   <section class="section">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input v-model="userInput" class="input" type="text" placeholder="User">
        <span class="icon is-small is-right">
          <i class="fa fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="passwordInput" class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button v-on:click="loginForm()" class="button is-success">
          Login
        </button>
      </p>
    </div>
   </section>
  </div>
    <footerblog></footerblog>
  
  </div>

</template>

<script>
import Vue from 'vue';
// Set config defaults when creating the instance
import config from '../config.js';
import toastr from 'vue-toastr';
Vue.component('vue-toastr',toastr)
require('vue-toastr/src/vue-toastr.less');
module.exports = {
    name:'login',
    data: function() { 
      return {
      userInput:'', 
      passwordInput:''}
    },
    
    methods:{

      loginForm : function(userInput, passwordInput){
         var vm = this;
         var datas = {
              auth: config.authAxios,
              params:{user:vm.userInput}
         }
         
         this.axios.get('login/search/findLoginByUser', datas).then(function(data){
           
           if(vm.passwordInput === data.password){
               vm.$refs.toastr.Add({
                        title: "Successfully LOGIN",
                        msg: "Successfully login",
                        clickClose: true, // Click Close Disable
                        timeout: 2000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "success",
                        onClosed: function(){
                          vm.$router.push({path:'/app'});
                        }
                    });
              
           }else{
             vm.$refs.toastr.Add({
                        title: "Bad Password",
                        msg: "Error password",
                        clickClose: true, // Click Close Disable
                        timeout: 2000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "error"
                      
                    });
           }

         }).catch(function(error){
                  vm.$refs.toastr.Add({
                        title: "ERROR LOGIN",
                        msg: error,
                        clickClose: true, // Click Close Disable
                        timeout: 2000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "error"
                      
                    });
         })
      }
    }

  
}
</script>

<style scoped> 

</style>


