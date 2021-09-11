<template>
  <section class="about_section2 text-center q-gutter-xl">
      <div class="animated fadeInLeft slower content_img">
      <q-img
        src="~assets/about/aboutUS.jpg"
        fit="contain"
      />
    </div>
    <div class="content_text q-pa-xl animated fadeInRight slower">
      <p class="">{{ lorem }}</p>
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
.about_section2
    background: hsl(220, 16%, 96%)
    .content_text
        display: inline-block
    .content_img
        display: inline-block
        .q-img 
            width: 400px
@media (max-width: 768px)
    .about_section2
        .content_text
            display: inline-block
            max-width: 30em
        .content_img
            display: inline-block
            width: 10em
            .q-img 
                width: 200px
            
</style>