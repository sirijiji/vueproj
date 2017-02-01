<template>
 <section class="hero is-info is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{msg}}
      </h1>
      <h2 class="subtitle">
        {{subMsg}}
      </h2>
    </div>
  </div>
</section>
</template>

<script>
 var database = firebase.database();

var title = '';
var datas = database.ref().child('results/0');

datas.on('value',function(data){

  
    console.log(data.val().header);
  
  
}); 

module.exports = {
  name: 'titlehero',
  data: function () {

    
    return {
      msg: title,
      subMsg : 'Un blog sur java et le javascript'
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

