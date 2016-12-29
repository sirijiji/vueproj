// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Listtodos from './components/Listtodos'
import TitleHero from './components/TitleHero'
import Navmenu from './components/Navmenu'
import FooterBlog from './components/FooterBlog'
Vue.component('todos',Listtodos)
Vue.component('titlehero',TitleHero) 
Vue.component('navmenu',Navmenu) 
Vue.component('footerblog',FooterBlog) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
