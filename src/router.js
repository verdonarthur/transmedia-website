import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // --------- Website --------
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pieges',
      name: 'pieges',
      component: () => import('./views/Traps.vue')
    },
    // --------- QUIZZ --------
    {
      path: '/quizz',
      name: 'quizz',
      component: () => import('./views/Quizz.vue')
    },
    // --------- QUESTION --------
    {
      path: '/quizz/question/:idQuestion',
      name: 'questions',
      props: true,
      component: () => import('./views/Question.vue')
    },
    // --------- REGISTER --------
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    }, {
      path: '/registerConfirm',
      name: 'registerConfirm',
      component: () => import('./views/RegisterConfirm.vue')
    },{
      path: '/cgu',
      name: 'cgu',
      component: () => import('./views/CGU.vue')
    },

    // --------- ADMIN PANEL --------
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('./views/Backend/Login.vue')
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      component: () => import('./views/Backend/Home.vue')
    }
  ]
})
