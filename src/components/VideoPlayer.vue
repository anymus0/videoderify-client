<template>
  <div>
    <video
      ref="videoPlayer"
      controls
      width="700"
      height="400"
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