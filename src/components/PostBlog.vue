<template>

<div class="container">

   
<div class="separator">
<p class="title is-1 is-spaced">{{post.title}}</p>
</div>
  
 <div> 
<p class="subtitle is-2">{{post.content}}</p>
 </div>


<section class="section">
  <router-link to="/app">
      <span class="icon is-medium">
        <i class="fa fa-arrow-left"></i>
      </span>
    </router-link>
</section>   
</div>
    
</template>

<script>
import config from '../config.js';
  module.exports = {
  name: 'postblog',
  props: ['id'],
  created: function(){
    var idPost = this.$route.params.id;
    var datas = {auth: config.authAxios};
    var vm = this;
   
    this.axios.get('note/'+idPost, datas).then(function(data){
      
      vm.post = {title : data.title, content:data.content};
    });
  },
  data: function () {
    var vm = this;
    return {post: {title:'', content:''}};
    
  }
}
</script>
<style>
.postblog {
    border-top: 1px solid #ffdd57;
    border-bottom: 1px solid #ffdd57;
}
.separator{
  border-bottom: 1px solid #ffdd57;
  margin-bottom: 30px;
}
</style>