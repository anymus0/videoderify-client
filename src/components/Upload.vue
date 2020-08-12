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

              <v-tooltip bottom color="red">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-file-input name="Files" @change="onAddFiles" color="red" counter small-chips multiple label="File input"></v-file-input>
                    <v-btn
                      :disabled="!(hasName && hasFile)"
                      color="red"
                      text
                      @click="notifUpload(); upload();"
                    >
                      Upload
                    </v-btn>
                  </div>
                </template>
                <span>Here's a tip:<br>You have to select the episodes to upload by an incremental order!</span>
              </v-tooltip>
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


      const response = await Fetchy.PostFiles('series/upload', formData)
      this.ResObj = response
      this.$refs.form.reset()
      this.Files = []
      // Notifications
      if (response.status !== undefined) {
        this.$toast.clear()
        if (response.status) this.$toast.success('Yay! Your series was uploaded!')
        else this.$toast.error('Oof... Something went wrong! Try again!')
      }
      else {
        this.$toast.clear()
        this.$toast.error('The problem is probably a problem on our end... This is problematic :(')
      }
    },
    notifUpload() {
      this.$toast.warning('Uploading has started!')
      this.$toast.open({
        message: 'Uploading is in progess...',
        type: 'info',
        dismissible: false,
        // duation is 1 hour
        duration: 3600000
      })
    }
  },
  computed: {
    hasName: function () {
      return (this.name !== '')
    },
    hasFile: function () {
      return (this.Files[0] !== undefined)
    }
  }
}
</script>
