<template >
  <form @submit="addNewTodo">
    <span>Completed: {{doneTodoCount}}</span>
    <input type="text" v-model="newTodo.title" /> <br />
    <span>Hide Completed Todos</span>
    <input type="checkbox" :checked="hideComplete" @change="toggleHideComplete"/>
  </form>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TodoInput',
  data () {
    return {
      newTodo: {}
    }
  },

  computed: {
    ...mapGetters([
      'doneTodoCount'
    ]),
    ...mapState({
      hideComplete: state => state.todo.hideComplete
    })
  },

  methods: {
    addNewTodo (e) {
      e.preventDefault()
      this.$store.commit('addTodo', {title: this.newTodo.title, complete: false})
      this.newTodo.title = ''
    },
    ...mapMutations([
      'toggleHideComplete'
    ])
  }
}
</script>
