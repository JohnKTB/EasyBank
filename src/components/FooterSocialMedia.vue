<template>
  <div class="q-gutter-lg">
    <q-img
      class="imageMeda"
      :class="animateLeft"
      style="height: 20px; max-width: 20px"
      src="~assets/icon-youtube.svg"
      fit="contain"
    />
    <q-img
      class="imageMeda"
      :class="animateLeft"
      style="height: 20px; max-width: 20px"
      src="~assets/icon-twitter.svg"
      fit="contain"
    />
    <q-img
      class="imageMeda"
      :class="animateRight"
      style="height: 20px; max-width: 20px"
      src="~assets/icon-pinterest.svg"
      fit="contain"
    />
    <q-img
      class="imageMeda"
      :class="animateRight"
      style="height: 20px; max-width: 20px"
      src="~assets/icon-instagram.svg"
      fit="contain"
    />
    <q-scroll-observer @scroll="scrollHandler" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const animateLeft = ref("");
    const animateRight = ref("");
    const animate = (element, position) => {
      element - 550 < position
        ? ((animateLeft.value = "animated fadeInLeft"),
          (animateRight.value = "animated fadeInRight"))
        : ((animateLeft.value = "animated fadeOutLeft"),
          (animateRight.value = "animated fadeOutRight"));
    };
    return {
      scrollHandler(info) {
        let $animated = document.querySelectorAll(".imageMeda");

        for (let i = 0; i < $animated.length; i++) {
          animate($animated[i].offsetTop, info.position.top);
        }
      },
      animateLeft,
      animateRight,
    };
  },
};
</script>

<style lang="sass">
</style>