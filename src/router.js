import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BaseQuestion from './components/Questions/BaseQuestion'

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
      path: '/quizz/question',
      component: BaseQuestion,
      children: [
        {
          path: '1',
          component: () => import('./views/Questions/Question1.vue')
        },
        // -------- INSCRIPTION AND CONFIRMATION
        {
          path: 'inscription',
          component: () => import('./views/Inscription.vue')
        }
      ]

    }

  ]
})
