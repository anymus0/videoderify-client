<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped>
      <v-list dense>
        <v-list-item link :to="{path:'/'}">
          <v-list-item-content>
            <v-icon>fa-home</v-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path:'/serieslist'}">
          <v-list-item-content>
            <v-icon>fa-list</v-icon>
            <v-list-item-title>List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path:'/upload'}">
          <v-list-item-content>
            <v-icon>fa-upload</v-icon>
            <v-list-item-title>Upload</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <router-view/>
  </v-app>
</template>


<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cbe6fb;
  background-color: rgb(71, 71, 71);
}
</style>
