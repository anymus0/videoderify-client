<template>
  <v-app>
    <v-container fluid>
      <h1>{{ Series.name }}</h1>
      <v-row>
        <v-col align="center">
          <VideoPlayer v-if="loaded()" :url="dynURL" />
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
      <v-row justify="center">
        <v-col>
          <a class="dwn" download :href="downloadSingleURL">
            <v-btn @click="notifDownload('file is')" color="indigo">
              Download Selected episode
            </v-btn>
          </a>
        </v-col>
          <v-col>
            <a :href="downloadAllURL" ref="allDownLink">
              <v-btn @click="notifDownload('files are')" color="indigo">Download all episodes</v-btn>
            </a>
          </v-col>
      </v-row>
    </v-container>
    <router-view/>
  </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/Fetchy.js'
import VideoPlayer from './VideoPlayer'
export default {
  name: "Episodes",
  components: {
    VideoPlayer
  },
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
    },
    notifDownload(type) {
      this.$toast.info(`Your ${type} being processed, please wait...`)
    }
  },
  computed: {
    dynURL() {
      return `http://localhost:3000/series/video/${this.Series.Files[this.selected].filename}`
    },
    downloadSingleURL() {
      return `http://localhost:3000/series/download/episode/${this.Series.Files[this.selected].filename}`
    },
    downloadAllURL() {
      return `http://localhost:3000/series/download/all/${this.Series._id}`
    }
  },
  async mounted() {
    const response = await Fetchy.Get(`series/get/${this.$route.params.id}`)
    this.Series = response
  }
}
</script>

<style lang="scss" scoped>
  .episode-list:hover {
    transform: scale(1.10);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 55px, rgba(0, 0, 0, 0.24) 0px 16px 28px;
  }
  .dwn {
    text-decoration: none;
    color: white;
  }
</style>