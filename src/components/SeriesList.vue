<template>
    <v-app>
      <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-card
              v-for="Series in Serieses"
              :key="Series.id"
              class="ma-3 pb-8 zoomIn"
              dark>
              <v-img
                height="200"
                width="200"
                :src="Series.thumb">
              </v-img>
              <p class="title pt-6">{{ Series.name }}</p>
              <v-btn
              :to="{path:`/episodes/${Series.id}`}"
              color="red">
                Watch it!
              </v-btn>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      </v-container>
      <router-view/>
    </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/getSeries.js'
export default {
  name: "SeriesList",
  data() {
    return {
      Serieses: []
    }
  },
  mounted() {
    Fetchy.getAllSeries().then(data => {
      this.Serieses = data
    })
  }
}
</script>

<style lang="scss" scoped>
  .zoomIn:hover {
    transform: scale(1.10);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 55px, rgba(0, 0, 0, 0.24) 0px 16px 28px;
  }
</style>