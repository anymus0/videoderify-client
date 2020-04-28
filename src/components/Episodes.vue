<template>
  <v-app>
    <v-container fluid>
      <h1>{{ Series.name }}</h1>
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
      Series: {}
    }
  },
  methods: {
    
  },
  mounted() {
    Fetchy.Get(`http://localhost:3000/serieses/${this.$route.params.id}`)
    .then(data => this.Series = data)
  }
}
</script>

<style lang="scss" scoped>

</style>