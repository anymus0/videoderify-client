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
                v-model="name"
                label="Title"
                single-line
                name="name"
              >
              </v-text-field>

              <v-textarea
                v-model="description"
                label="Description/Note"
                single-line
                name="description"
              >
              </v-textarea>

              <v-text-field
                v-model="thumb"
                label="Thumbnail image link"
                single-line
                name="thumb"
              >
              </v-text-field>

              <v-file-input name="Files" @change="onAddFiles" color="red" counter small-chips multiple label="File input"></v-file-input>

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
  components: {
    //FilePond
  },
  data: () => ({
    name: '',
    description: '',
    thumb: '',
    ResObj: {},
    Files: []
  }),
  methods: {
    onAddFiles(files) {
      files.forEach((file) => {
          this.Files.push(file)
      })
    },
    async upload() {
      // create a new form that will be sent to the API
      const formData = await new FormData()
      // add files to the form data
      this.Files.forEach(file => {
        formData.append("Files", file, file.name)
      })
      // additional datas
      formData.append("name", this.name)
      formData.append("description", this.description)
      formData.append("thumb", this.thumb)


      const POST = await Fetchy.PostFiles('http://localhost:3000/series/upload', formData)
      this.ResObj = POST
      this.$refs.form.reset()
      this.Files = []
    },
  }
}
</script>


<style lang="scss" scoped>

</style>