<template>
  <section class="contact_section4 text-center q-gutter-xl">
    <div class="content_text">
      <p class="title text-weight-bold">Customer Support</p>
      <p class="subtitle text-justify">{{ lorem }}</p>
    </div>
    <div class="content_card q-mb-xl">
      <q-card class="card">
        <q-card-section>
          <p>contact us</p>
          <div>
            <i class="fas fa-phone-alt text-primary q-mr-sm q-mb-xl"></i
            ><span class="text-primary">(01)484-0000</span>
          </div>
          <button class="btnn">know more</button>
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../css/app'
.contact_section4
  background: hsl(220, 16%, 96%)
  .content_text
    display: inline-block
    width: 60%
    .title
      font-size: 1.3em
    .subtitle
      font-size: .9em
  .content_card
    display: inline-block
    width: 50%
    .card
    .btnn
      border-radius: 50px
      background: linear-gradient(90deg, rgba(70,212,113,1) 11%, rgba(100,219,180,1) 53%)
      color: #fff
      font-weight: 700
      border: none
      min-width: 7em
      height: 2.6em
      margin-bottom: 2em
@media (min-width: 1024px)
  .contact_section4
    .content_text
      display: inline-block
      width: 40%
    .content_card
      display: inline-block
      width: 40%
</style>