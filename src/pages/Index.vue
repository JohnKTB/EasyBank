<template>
  <q-page>
    <IndexSection1 />
    <IndexSection2 />
    <IndexSection3 />
  </q-page>
</template>

<script>
import IndexSection1 from "../components/IndexSection1.vue";
import IndexSection2 from "../components/IndexSection2.vue";
import IndexSection3 from "../components/IndexSection3.vue";
export default {
  components: {
    IndexSection1,
    IndexSection2,
    IndexSection3
  },
};
</script>
<style lang="sass">
</style>