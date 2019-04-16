import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    // --------- QUIZZ --------
    {
      path: '/quizz',
      name: 'quizz',
      component: () => import('./views/Quizz.vue')
    },
    // --------- QUESTION --------,
    {
      path: '/quizz/question/:idQuestion',
      name: 'questions',
      props: true,
      component: () => import('./views/Question.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    }, {
      path: '/registerConfirm',
      name: 'registerConfirm',
      component: () => import('./views/RegisterConfirm.vue')
    }
  ]
})
