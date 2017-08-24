<template>
   <div class="container">

  <div v-for="item of posts">
   
    
     <article class="message is-info">
      <div class="message-header-align">
        <router-link :to="{path: '/sectionblog/post/'+item.id}" replace>
        <h3 class="title">{{item.title}} &nbsp; {{item.creationDate | formatDate}}</h3> 
        </router-link>
        <button v-on:click="deleteNote(item.id)" class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body is-medium">
        <h3>{{item.content}}</h3>
      </div>
    </article>
      
    </div>
    <vue-toastr ref="toastr"></vue-toastr>
  </div> 
  
</template>

<script>
import config from '../config.js';
import toastr from 'vue-toastr';
require('vue-toastr/src/vue-toastr.less');


module.exports = {
  name: 'listblogpost',
  data: function () {
    var tabposts = [];
  
    var datas = {auth: config.authAxios}
      this.axios.get('note',datas).then(function(data){
       
        data._embedded.notedata.forEach(function(element) {
          tabposts.push(element);
        }, this);
        
      })

    return {posts:tabposts};
  },
  methods:{
    
    deleteNote:function(idNote){
      var vm = this;
       var datas = {auth: config.authAxios}

      this.axios.delete('note/'+idNote, datas).then(function(){
        vm.$refs.toastr.Add({
                        title: "SUCCESS DELETED MESSAGE",
                        msg: "Post successfully deleted",
                        clickClose: true, // Click Close Disable
                        timeout: 1000, // Remember defaultTimeout is 5 sec..
                        position: "toast-top-full-width",
                        type: "success",
                        onClosed: function(){
                            vm.$router.go(vm.$router.currentRoute)
                        }
                    });
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-header {
    background-color: cornflowerblue;
    border-radius: 3px 3px 0 0;
    color: #fff;
    padding: 1px 1px;
}

.message-header-align {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #00d1b2;
    border-radius: 3px 3px 0 0;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.25;
    padding: 0.5em 0.75em;
    position: relative;
    margin-top: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.linktitle {
 color: #00d1b2;  
}

.separator {
  border-top : 1px solid #00d1b2;
  margin-top: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
