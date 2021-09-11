<template>
  <section class="section3">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="carousel text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide
        name="style"
        class="column no-wrap flex-center"
      >
        <q-img
          src="~assets/slider/billetes.jpg"
          style="height: 100vh; width: 100vw"
          fit="contain"
        />
        <div style="color: #fff" class="q-mt-md text-center">{{ lorem }}</div>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap flex-center"
      >
        <q-img
          src="~assets/slider/calculadora.jpg"
          style="height: 100vh; width: 100vw"
          fit="contain"
        />
        <div class="q-mt-md text-center">{{ lorem }}</div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-img
          src="~assets/slider/monedas.jpg"
          style="height: 100vh; width: 100vw"
          fit="contain"
        />
        <div class="q-mt-md text-center">{{ lorem }}</div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-img
          src="~assets/slider/tarjeta.jpg"
          style="height: 100vh; width: 100vw"
          fit="contain"
        />
        <div class="q-mt-md text-center">{{ lorem }}</div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style lang="sass" scoped>
.carousel
  background: hsl(233, 8%, 62%)
.section3
  width: 100vw
</style>