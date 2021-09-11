<template>
  <section class="tarjet_section2 flex flex-center q-gutter-lg">
    <p class="text-center text-h5 text-weight-medium q-mx-md q-ma-xl">
      Know the cards we have for you
    </p>
    <div class="content_cards q-gutter-xl">
      <q-card class="section2__card q-mb-lg">
        <q-img
          src="~assets/tarjetPage/tarjetas.jpg"
          spinner-color="primary"
          spinner-size="82px"
          style="max-height: 250px; width: 100%"
        />

        <q-card-section>
          <div class="text-h6 text-weight-bolder">Credit cards</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="section2__card q-mb-lg">
        <q-img
          src="~assets/tarjetPage/tarjetaDebito.jpg"
          spinner-color="primary"
          spinner-size="82px"
          style="max-height: 250px; width: 100%"
        />

        <q-card-section>
          <div class="text-h6 text-weight-bolder">Debit cards</div>
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