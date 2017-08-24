<template>
 <section class="hero is-info is-bold">
  <div class="hero-body ">

    <nav class="nav container">
    <div class="nav-left">

      <div class="nav-item">
        
          <h1 class="title">
            Note Application
          </h1>
        
      </div>
      <div class="nav-item">
        <router-link to="/addPostForm">
          <a class="button is-primary">Ajouter une note</a>
        </router-link>
      </div>
    </div>  
    
    <span v-on:click="toggleNavActive()" class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
    
    <div  class="nav-right nav-menu" v-bind:class="{'is-active' : toggleActive}">
    <router-link to="/app">
      <span class="icon is-large">
        <i class="fa fa-home"></i>
      </span>
    </router-link>
   
    </div>
</nav>
  </div>
 
</section>
</template>

<script>
 
module.exports = {
  name: 'titlehero',
  data: function () {
  var titleObj = {msg:'',subMsg:''};

  
    return {titleObj:titleObj, toggleActive:false};
  },
  
  methods:  {
    
    toggleNavActive: function(){
      if(this.toggleActive === false){
        this.toggleActive = true;
      }else{
        this.toggleActive = false;
      }
      
      
    },
    displayAddPostForm: function(data){
      alert("display modal");
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

