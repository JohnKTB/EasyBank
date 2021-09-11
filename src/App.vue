<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@200&display=swap')
*
  font-family: 'Public Sans', sans-serif
body
   overflow-x: hidden
</style>