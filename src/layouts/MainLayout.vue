<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <q-page-container>
      <div id="overlay"></div>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "MainLayout",

  components: {
    Header,
    Footer,
  },

  setup() {
    return {};
  },
};
</script>
<style lang="sass">
#overlay
  position: fixed
  display: none
  width: 100%
  height: 100%
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.5)
  z-index: 2
@media (min-width: 1440px)
*
  font-size: 17px
</style>
