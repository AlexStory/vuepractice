<template>
  <li v-show="hideComplete ? !todo.complete: true">
    <input type="checkbox" @change="updateCheckbox(index)" v-bind:checked="todo.complete">
    <span v-text="todo.title" v-bind:class="{done: todo.complete}"></span>
    <button @click="removeTodo(index)">X</button>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TodoItem',
  props: [
    'todo',
    'index'
  ],

  methods: {
    updateCheckbox (idx) {
      this.$store.commit('updateTodo', idx)
    },
    ...mapMutations([
      'removeTodo'
    ])
  },

  computed: {
    ...mapState({
      hideComplete: state => state.todo.hideComplete
    })
  }
}

</script>

<style lang="styl">
.done
  text-decoration line-through
</style>
