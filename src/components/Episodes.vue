<template>
  <v-app>
    <v-container fluid>
      <h1>{{ Series.name }}</h1>
      <v-row>
        <v-col align="center">
          <video
            v-if="loaded()"
            controls
            width="700"
            height="400"
            :src="dynURL">
          </video>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-btn
              color="red"
              v-for="(Episode, index) in Series.Files"
              :key="index"
              @click="SelectEpisode(index)"
              class="ml-4 episode-list"
              :class="{'accent-4': selected === index}"
            >
              {{ index + 1 }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <router-view/>
  </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/Fetchy.js'
export default {
  name: "Episodes",
  data() {
    return {
      Series: {Files: [0]},
      selected: 0,
    }
  },
  methods: {
    SelectEpisode(index) {
      this.selected = index
    },
    // only show video player when the filename has a value (prevents an error in the API)
    loaded() {
      if (this.Series.Files[this.selected].filename === undefined) {
        return false
      }
      else {
        return true
      }
    }
  },
  computed: {
    dynURL() {
      return `http://localhost:3000/video/${this.Series.Files[this.selected].filename}`
    }
  },
  mounted() {
    Fetchy.Get(`http://localhost:3000/serieses/${this.$route.params.id}`)
    .then(data => this.Series = data)
  }
}
</script>

<style lang="scss" scoped>
  .episode-list:hover {
    transform: scale(1.10);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 55px, rgba(0, 0, 0, 0.24) 0px 16px 28px;
  }
</style>