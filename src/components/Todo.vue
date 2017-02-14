<template>
  <div>
    <TodoInput />
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'todo',

  computed: {
    ...mapState({
      todos: state => state.todo.todos
    })
  }
}
</script>
