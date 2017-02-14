<template >
  <ul>
    <TodoItem v-for="(todo, index) in todos" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
export default {
  props: ['todos']
}
</script>
