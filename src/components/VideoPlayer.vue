<template>
  <div>
    <video
      ref="videoPlayer"
      controls
      :src="url"
    >
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['url']
}
</script>

<style lang="scss" scoped>
  video {
    width: 80%;
    height: 60%;
  }
</style>