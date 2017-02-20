<template>
  <div >
  <section class="section" v-for="item of posts">
    <div class="container">
      
      

      
     
      <router-link to="/sectionblog/post" replace>
        <h1 class="title linktitle">{{item.subject}}</h1>
        <h3 class="subtitle linktitle">{{item.createdAt | formatDate}}</h3>
      </router-link>
     
      
      <div class="separator"/> 
          <!-- p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  <h2>Second level</h2>
  <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
      </div>  -->
       
    </div>
  </section>
  </div>
</template>

<script>
module.exports = {
  name: 'listblogpost',
  data: function () {

    
    var tabposts = [];
    firebase.database().ref('posts/').on('child_added', function(data){
        tabposts.push(data.val());
    });
    
    return {posts:tabposts};
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.linktitle {
 color: #00d1b2;  
}

.separator {
  border-top : 1px solid #00d1b2;
  margin-top: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
