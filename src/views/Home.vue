<template>
  <div>
    <HomeComp />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'

export default {
  name: 'Home',
  components: {
    HomeComp
  }
}
</script>
