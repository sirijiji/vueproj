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


module.exports = {
  name: 'titlehero',
  data: function () {
  var titleObj = {msg:'', subMsg:''};
  var refDatabase = database.ref();
  refDatabase.child('title').on('value',function(data){
      titleObj.msg = data.val();
  });

  refDatabase.child('user').on('value',function(data){
      titleObj.subMsg = data.val();
  });
  
    return titleObj;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

