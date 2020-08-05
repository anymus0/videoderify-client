<template>
  <v-app>
    <Nav />
    <router-view/>
  </v-app>
</template>


<script>
import Nav from "./components/Nav.vue"

  export default {
    components: {
      Nav
    },
    props: {
      source: String,
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #181a1b;
}
</style>
