<template>
  <section class="tarjet_section2 flex flex-center q-gutter-lg q-pt-xl">
    <p class="text-center text-h4 text-weight-medium q-mx-md q-ma-xl">Claims</p>
    <div class="content_cards q-gutter-xl q-mb-xl q-pb-xl">
      <q-card class="section2__card q-mb-lg">
        <q-img
          src="~assets/contact/libroReclamaciones.png"
          spinner-color="primary"
          spinner-size="82px"
          style="height: 250px; width: 100%"
        />

        <q-card-section>
          <div class="text-h6 text-weight-bolder">Complaints Book</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="section2__card q-mb-lg">
        <q-img
          src="~assets/contact/caso.png"
          spinner-color="primary"
          spinner-size="82px"
          style="height: 250px; width: 100%"
        />

        <q-card-section>
          <div class="text-h6 text-weight-bolder">Status of your case</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="section2__card q-mb-lg">
        <q-img
          src="~assets/contact/atencion.png"
          spinner-color="primary"
          spinner-size="82px"
          style="height: 250px; width: 100%"
        />

        <q-card-section>
          <div class="text-h6 text-weight-bolder">Attention Procedure</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../css/app'
.tarjet_section2
  margin-bottom: 2em
.content_cards
  padding-left: 1.5em
  .section2__card
    width: 100%
    max-width: 300px
    height: 25em
    transition: .5s
    &:hover
      transform: translate(5px, -20px)
@media (min-width: 768px)
  .tarjet_section2
    flex-direction: column
@media (min-width: 1024px)
  .content_cards
    display: flex
</style>