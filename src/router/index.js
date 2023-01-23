import { createRouter, createWebHistory } from 'vue-router'
import GetView from '../views/GetView'
import JudgeView from '../views/JudgeView'
import NotFoundView from '../views/NotFoundView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: JudgeView
  },
  {
    path: '/judge/',
    name: 'judge',
    component: JudgeView
  },
  {
    path: '/get/',
    name: 'get',
    component: GetView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path:'/index.html/',
    redirect:"/",
  },
  {
    path:'/:catchALL(.*)',
    redirect:"/404/"
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
