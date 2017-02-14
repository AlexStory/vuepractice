<template>
  <div>
    <button @click="decr">-</button>
    <span v-text="count"></span>
    <button @click="incr">+</button>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Inc',
  computed: mapState({
    count: state => state.count
  }),
  methods: mapMutations({
    incr: 'increment',
    decr: 'decrement'
  })
}
</script>
