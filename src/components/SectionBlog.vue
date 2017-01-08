<template>
<div id="sectionblog">
<titlehero></titlehero>
    <navmenu></navmenu>
    <section class="section">
      
      <router-view></router-view>
       
    </section>
    <footerblog></footerblog>
</div>    
</template>

<script>
    module.exports = {
  name: 'sectionblog',
  components:{

  },
  data: function () {
    return {
      msg: 'List of Posts'
    }
    
  }
}
</script>
<style>

</style>