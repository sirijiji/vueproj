// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import TitleHero from './components/TitleHero'
import Navmenu from './components/Navmenu'
import FooterBlog from './components/FooterBlog'
import SectionBlog from './components/SectionBlog'
import PostBlog from './components/PostBlog'
import ListPostBlog from './components/ListPostBlog'
import AppPost from './components/AppPost'
import AddPostForm from './components/AddPostForm'


Vue.component('titlehero',TitleHero) 
Vue.component('navmenu',Navmenu) 
Vue.component('footerblog',FooterBlog)
Vue.component('sectionblog',SectionBlog) 
Vue.component('postblog',PostBlog)
Vue.component('listblogpost',ListPostBlog) 
Vue.component('apppost',AppPost) 
Vue.component('addpostform',AddPostForm) 
Vue.use(VueRouter)

const routes = [ 
  
  {path: '/sectionblog', component: SectionBlog,
  children:[
    {path:'post', component: PostBlog}
  ]},
  {path:'/', component: AppPost},
  {path:'/addPostForm', component: AddPostForm},
]


const router = new VueRouter({
  routes // short for routes: routes
  
})

/* eslint-disable no-new */

const app = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
  
}).$mount('#app')



