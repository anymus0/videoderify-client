<template>
  <div id="EpisodesView">
    <Episodes />
    <router-view/>
  </div>
</template>

<script>
import Episodes from '@/components/Episodes.vue'
export default {
  name: "EpisodesView",
  components: {
    Episodes
  }
}
</script>

<style lang="scss" scoped>
  #EpisodesView {
    padding-top: 5rem;
  }
</style>