<template>
  <v-app id="home">
    <v-layout align-center="true" justify-center="true" dark>
      <v-row>
        <v-col class="bg-aqua">
          <h1>Start Derifying</h1>
          <h3>Maybe you want to upload something new?</h3>
          <v-btn :to="{path:'/upload'}" color="red" class="mt-5 mb-5">Upload</v-btn>
          <h3>Or you can just browse from the library:</h3>
          <v-btn :to="{path:'/serieslist'}" color="red" class="mt-5">Watch now!</v-btn>
        </v-col>
      </v-row>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "HomeComp"
}
</script>

<style lang="scss" scoped>
#home {
  background-image: url("https://vignette.wikia.nocookie.net/onepunchman/images/8/8a/Watchingtv.png/revision/latest?cb=20151230134703");
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>