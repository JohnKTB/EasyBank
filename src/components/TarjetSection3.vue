<template>
  <section class="tarjet_section3 q-pa-xl q-gutter-md q-px-lg text-justify">
    <q-img
      src="~assets/tarjetPage/tarjetas.jpg"
      spinner-color="primary"
      spinner-size="82px"
      style="height: 150px; max-width: 250px"
    />
    <div class="content_texts">
      <p class="text-weight-bolder">
        Do you have a credit card and you can't find it on the list?
      </p>
      <p>
        It may no longer be in effect. Don't worry, your benefits are
        maintained!
      </p>
    </div>
    <button class="btn q-mb-lg">More information</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.tarjet_section3
  background: hsl(220, 16%, 96%)
  display: flex
  justify-content: space-around
  flex-direction: row
  flex-wrap: wrap
@media (min-width: 768px)
  .tarjet_section3
    flex-direction: row
    .content_texts
      width: 8em
    .btn
      margin-top: 3em
@media (min-width: 1024px)
  .tarjet_section3
    .content_texts
      width: 25em
@media (min-width: 1440px)
  .tarjet_section3
    .content_texts
      width: 40em
</style>