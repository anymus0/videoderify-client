<template>
  <v-app>
    <v-container fluid>
      <h1>Name: {{ Series.name }}</h1>
    </v-container>
    <router-view/>
  </v-app>
</template>

<script>
import {Fetchy} from '@/fetch/getSeries.js'
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
    Fetchy.getSeries(this.$route.params.id).then(data => this.Series = data)
  }
}
</script>

<style lang="scss" scoped>

</style>