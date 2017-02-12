<template>
 <section class="hero is-info is-bold">
  <div class="hero-body ">

    <nav class="nav container">
    <div class="nav-left">

      <div class="nav-item">
        
          <h1 class="title">
            {{titleObj.msg}}
          </h1>
        
        <!--<div>
          <h2 class="subtitle">
            {{subMsg}}
          </h2>
        </div>-->
      </div>
      <div class="nav-item">
        <router-link to="/addPostForm">
          <a class="button is-primary">Add a new Post</a>
        </router-link>
      </div>
    </div>  
    
    <span v-on:click="toggleNavActive()" class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
    
    <div  class="nav-right nav-menu" v-bind:class="{'is-active' : toggleActive}">
    <a class="nav-item" href="#">
      <span class="icon is-large">
        <i class="fa fa-home"></i>
      </span>
    </a>
    <a class="nav-item" href="#">
      <span class="icon is-large">  
        <i class="fa fa-github-square" aria-hidden="true"></i>
      </span>
    </a>

    <a class="nav-item" href="#">
      <span class="icon is-large">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </span>
    </a>
    </div>
</nav>
  </div>
 
</section>
</template>

<script>
 var database = firebase.database();
var refDatabase = database.ref();

module.exports = {
  name: 'titlehero',
  data: function () {
  var titleObj = {msg:'',subMsg:''};

  
  refDatabase.child('title').on('value',function(data){
      titleObj.msg = data.val();
  });


  refDatabase.child('subtitle').on('value',function(data){
      titleObj.subMsg = data.val();
  });
  
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

