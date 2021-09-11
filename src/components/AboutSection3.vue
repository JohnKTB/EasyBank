<template>
  <section class="about_section3">
    <p class="text-h4 text-weight-bolder">
      Currently, the Foundation concentrates its efforts in three main areas:
    </p>
    <ul class="text-h3">
      <li><span class="text-weight-bolder">1.</span> {{ lorem }}</li>
      <li><span class="text-weight-bolder">2.</span> {{ lorem }}</li>
      <li><span class="text-weight-bolder">3.</span> {{ lorem }}</li>
    </ul>
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
.about_section3
  background: hsl(233, 8%, 62%)
  color: #fff
  padding: 1em
  ul
    li
      margin-bottom: 1em
@media (min-width: 1024px)
  .about_section3
    padding: 5em
</style>