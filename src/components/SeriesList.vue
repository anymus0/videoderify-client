<template>
    <v-app>
      <v-container fluid>
      <v-row v-if="!isError">
        <v-col cols="12">
          <v-row justify="center">
            <v-card
              v-for="Series in Serieses"
              :key="Series._id"
              class="ma-3 pb-8 zoomIn series-card"
              dark>
              <v-img
                height="300"
                width="300"
                :src="Series.thumb">
              </v-img>
              <p class="title pt-6">{{ Series.name }}</p>
              <v-btn
                :to="{path:`/episodes/${Series._id}`}"
                color="red">
                Watch it!
              </v-btn>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <h1 v-if="isError">Network Error!</h1>
      <h1
        v-if="isEmpty"
      >
        No one's uploaded anything yet :(
      </h1>
      </v-container>
      <router-view/>
    </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/Fetchy.js'
export default {
  name: "SeriesList",
  data() {
    return {
      Serieses: undefined,
      isError: false,
    }
  },
  async mounted() {
    const AllSeries = await Fetchy.Get('series/all')
    this.Serieses = AllSeries
    // Network error handling
    if (this.Serieses.message !== undefined) {
      if((this.Serieses.message.includes('Failed')) || (this.Serieses.message.includes('Error'))) {
        this.isError = true
      }
    }
  },
  computed: {
    // Empty response handling
    isEmpty() {
      if (this.Serieses !== undefined) {
        return this.Serieses.length === 0 && !this.isError
      }
      else return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .zoomIn:hover {
    transform: scale(1.10);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 55px, rgba(0, 0, 0, 0.24) 0px 16px 28px;
  }
  .series-card {
    p {
      padding-right: 1rem;
      padding-left: 1rem;
    }
    // mobile
    width: 15rem;
    // tablet
    @media only screen and (min-width: 768px) {
      width: 16rem;
    }
    // desktop
    @media only screen and (min-width: 1200px) {
      width: 17.5rem;
    }
  }

</style>