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
import Login from './components/Login'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import toastr from 'vue-toastr'
import VueSession from 'vue-session'



Vue.component('titlehero',TitleHero) 
Vue.component('navmenu',Navmenu) 
Vue.component('footerblog',FooterBlog)
Vue.component('sectionblog',SectionBlog) 
Vue.component('postblog',PostBlog)
Vue.component('listblogpost',ListPostBlog) 
Vue.component('apppost',AppPost) 
Vue.component('addpostform',AddPostForm)
Vue.component('login',Login) 
Vue.component('vue-toastr',toastr)


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueSession)


Vue.filter('formatDate', function (date) {
  return moment(date).format('DD/MM/YYYY hh:mm:ss');
})
Vue.axios.defaults.baseURL = 'http://note.sirisak.fr:8080/api';
Vue.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a response interceptor
Vue.axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

const routes = [ 
  {
    path: '/sectionblog', 
    component: SectionBlog,
    children:[
      {
        path:'post/:id', 
        component: PostBlog,
        props:true
      }
    ]},
  {path:'/app', component: AppPost},
  {path:'/', component: Login},
  
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




