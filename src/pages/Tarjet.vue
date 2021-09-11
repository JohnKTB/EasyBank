<template>
  <q-page>
    <TarjetSection1 />
    <TarjetSection2 />
    <TarjetSection3 />
    <TarjetSection4 />
  </q-page>
</template>

<script>
import TarjetSection1 from "../components/TarjetSection1.vue"
import TarjetSection2 from "../components/TarjetSection2.vue"
import TarjetSection3 from "../components/TarjetSection3.vue"
import TarjetSection4 from "../components/TarjetSection4.vue"
export default {
components:{
  TarjetSection1,
  TarjetSection2,
  TarjetSection3,
  TarjetSection4
}
}
</script>

<style lang="sass" scoped>
</style>