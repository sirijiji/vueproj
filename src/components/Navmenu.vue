<template>

<nav class="nav">

  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div class="nav-left nav-menu container">
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
</template>    

<script>
module.exports = {
    name : 'navmenu',
    data : function(){
        return {
            first:'Home'
        }
    }

}


</script>

<style scoped>
.navmenu {
  padding: 20px;
}

</style> 