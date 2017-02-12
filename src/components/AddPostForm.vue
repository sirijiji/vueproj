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
        </div>       
    </section>
    <footerblog></footerblog>
    </div>
</template>
<script>

    module.exports = {
        name: 'addpostform',
        data: function(){
            return {name:'', subject:'', text:''}
        },
        methods: {

            submitForm:function(){

                firebase.database().ref('posts/' + this.name).set({
                    username: this.name,
                    subject: this.subject,
                    text:this.text
                }).then(function(){
                    console.log("success");
                }, function(err){
                    console.log('error');
                });
            }

        }
    }
</script>
<style></style>