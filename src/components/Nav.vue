<template>
  <v-bottom-navigation
    grow
    color="red"
  >
    <v-btn :to="{path:'/'}">
      <span>Home</span>
      <v-icon>fa-home</v-icon>
    </v-btn>

    <v-btn :to="{path:'/serieslist'}">
      <span>Library</span>
      <v-icon>fa-list</v-icon>
    </v-btn>

    <v-btn :to="{path:'/upload'}">
      <span>Upload</span>
      <v-icon>fa-upload</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>