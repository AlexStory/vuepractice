import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todo: {
      hideComplete: false,
      todos: []
    }
  },
  getters: {
    doneTodos: state => state.todo.todos.filter(x => x.complete),
    doneTodoCount: (state, getters) => getters.doneTodos.length
  },
  mutations: {
    increment (state) {
      state.count ++
    },
    decrement (state) {
      state.count --
    },
    addTodo (state, todo) {
      state.todo.todos.push(todo)
    },
    updateTodo (state, idx) {
      state.todo.todos[idx].complete = !state.todo.todos[idx].complete
    },
    removeTodo (state, idx) {
      state.todo.todos.splice(idx, 1)
    },
    toggleHideComplete (state) {
      state.todo.hideComplete = !state.todo.hideComplete
    }
  }
})
