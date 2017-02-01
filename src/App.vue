<template>
  <div id="app">
   
    <router-view></router-view>
   
  
  </div>
</template>
<script>

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvmNILd2wFu_8ZZge8RyhPf0zWaNFE7D0",
    authDomain: "sizzling-fire-6227.firebaseapp.com",
    databaseURL: "https://sizzling-fire-6227.firebaseio.com",
    storageBucket: "sizzling-fire-6227.appspot.com",
    messagingSenderId: "284009053496"
  };
  firebase.initializeApp(config);

module.exports = {
  name: 'app',
  components: {
    
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;

}
</style>
