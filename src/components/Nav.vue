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
    <v-tooltip bottom color="red">
      <template v-slot:activator="{ on, attrs }">
        <div id="storageBox" v-bind="attrs" v-on="on">
          <v-icon>fa-hdd</v-icon><br>
          <span><strong>0/1200GB</strong></span>
        </div>
      </template>
      <span>This feature is not live yet!</span>
    </v-tooltip>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style lang="scss" scoped>
#storageBox {
  padding: 0.5rem;
  font-size: 0.95rem;
  display: block;
  margin-left:auto; margin-right:0;
}
</style>