<template>
  <v-app id="home">
    <v-layout align-center="true" justify-center="true" dark>
      <div id="welcomeBox">
        <h1>Start Derifying</h1>
        <h3>Maybe you want to upload something new?</h3>
        <v-btn :to="{path:'/upload'}" color="red" class="mt-5 mb-5">Upload</v-btn>
        <h3>Or you can just browse from the library:</h3>
        <v-btn :to="{path:'/serieslist'}" color="red" class="mt-5">Watch now!</v-btn>
      </div>
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
  background-image: url("#");
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#welcomeBox {
  padding: 2rem 20% 2rem 20%;
  background-color: #181a1bb2;
  color: #91b6c8;
}
</style>