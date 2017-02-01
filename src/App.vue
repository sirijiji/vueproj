<template>
  <div id="app">
   
    <router-view></router-view>
   
  
  </div>
</template>
<script>

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCA_rZLNH0dMdttS1dWhvZiPMpXhcWBwRg",
    authDomain: "vuejsblog.firebaseapp.com",
    databaseURL: "https://vuejsblog.firebaseio.com",
    storageBucket: "vuejsblog.appspot.com",
    messagingSenderId: "444441177109"
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
