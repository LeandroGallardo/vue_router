import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonLastname from '../views/PersonLastname'
import PersonView from '../views/PersonView'
import Food from '../views/Food.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name:'home',
  component: Home,
},{
  path: '/food',
  name:'food',
  component: Food,
    beforeEnter: (to,from,next) => {
      console.log('estas entrando en food')
      console.log(to,from);
      next()
    }
},{
  path:'/name',
  component: PersonView,
  children:[{
    path: ':id',
    name:'lastname',
    component: PersonLastname,
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log('beforeeach');
  console.log(to,from);
  next()
})
router.afterEach((to,from)=>{
  console.log('afterEach');
  console.log(to,from);
})


export default router
