<template>
  <v-app>
    <v-layout align-center="true" justify-center="true" dark>
      <v-card
        max-width="300"
      >

      <v-row>
        <v-col class="ma-7">
          <v-card-subtitle class="pb-0 title">
            Give us some details!
          </v-card-subtitle>
          <v-form justify-center ref="form">
            <v-text-field
              name="name"
              label="Title"
              single-line
            >
            </v-text-field>

            <v-textarea
              name="description"
              label="Description/Note"
              single-line
            >
            </v-textarea>

            <v-text-field
              name="thumb"
              label="Thumbnail image link"
              single-line
            >
            </v-text-field>

              <v-btn
                color="red"
                text
                @click="upload()"
              >
                Upload
              </v-btn>
          </v-form>
        </v-col>
      </v-row>

      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/Fetchy.js'
export default {
  name: "Upload",
  data: () => ({
    name: '',
    description: '',
    thumb: ''
  }),
  methods: {
    upload() {
      // send an object to the API
      const NewSeriesObj = {
        name: this.name,
        description: this.description,
        thumb: this.thumb
      }
      Fetchy.postSeries(NewSeriesObj)
      this.$refs.form.reset()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>