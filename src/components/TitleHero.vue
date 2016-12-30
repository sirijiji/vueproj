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
module.exports = {
  name: 'titlehero',
  data: function () {
    return {
      msg: 'Sirisak Blog',
      subMsg : 'Un blog sur java et le javascript'
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

