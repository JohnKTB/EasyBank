<template>
  <q-page>
    <ContactSection1 />
    <ContactSection2 />
    <ContactSection3 />
    <ContactSection4 />
  </q-page>
</template>

<script>
import ContactSection1 from "../components/ContactSection1.vue";
import ContactSection2 from "../components/ContactSection2.vue";
import ContactSection3 from "../components/ContactSection3.vue";
import ContactSection4 from "../components/ContactSection4.vue";
export default {
  components: {
    ContactSection1,
    ContactSection2,
    ContactSection3,
    ContactSection4,
  },
};
</script>

<style>
</style>