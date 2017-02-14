<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/inc">Inc</router-link></li>
        <li><router-link to="/todo">Todo</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="styl">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
li
    list-style none

</style>
