import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Inc from 'components/Inc'
import Todo from 'components/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/inc',
      component: Inc
    },
    {
      path: '/todo',
      component: Todo
    }
  ]
})
