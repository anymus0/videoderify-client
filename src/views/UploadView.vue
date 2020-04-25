<template>
  <div id="UploadView">
    <Upload />
    <router-view/>
  </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
export default {
  name: "EpisodesView",
  components: {
    Upload
  }
}
</script>

<style lang="scss" scoped>

</style>