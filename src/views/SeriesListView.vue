<template>
  <div id="ListView">
    <SeriesList />
  </div>
</template>

<script>
import SeriesList from '@/components/SeriesList.vue'
export default {
  name: "SeriesListView",
  components: {
    SeriesList
  }
}
</script>

<style lang="scss" scoped>
  #ListView {
    padding-top: 5rem;
  }
</style>