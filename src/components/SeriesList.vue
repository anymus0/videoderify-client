<template>
    <v-app>
      <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-card
              v-for="Series in Serieses"
              :key="Series.id"
              class="ma-3 pb-12 zoomIn"
              dark>
              <v-img
                height="200"
                width="200"
                :src="Series.thumb">
              </v-img>
              <p class="title pt-6">{{ Series.name }}</p>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: "SeriesList",
  data() {
    return {
      Serieses: [
        {name: "KonoSuba", id: 1, thumb: "https://blacknerdproblems.com/wp-content/uploads/2016/04/Konosuba.jpg"},
        {name: "Steins;Gate", id: 2, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 3, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 4, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 5, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 6, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 7, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 8, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 9, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 10, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 11, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 12, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 12, thumb: "https://i.redd.it/dvm703m3baf01.jpg"},
        {name: "Steins;Gate", id: 14, thumb: "https://i.redd.it/dvm703m3baf01.jpg"}
        ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .zoomIn:hover {
    transform: scale(1.10);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 55px, rgba(0, 0, 0, 0.24) 0px 16px 28px;
  }
</style>