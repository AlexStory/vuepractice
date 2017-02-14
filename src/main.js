// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'App'
import router from 'router'
import store from 'store'
import TodoItem from 'components/TodoItem'
import TodoInput from 'components/TodoInput'
import TodoList from 'components/TodoList'

Vue.use(VueResource)
Vue.component('TodoItem', TodoItem)
Vue.component('TodoInput', TodoInput)
Vue.component('TodoList', TodoList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
