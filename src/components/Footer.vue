<template>
  <footer class="footer">
    <div class="content_img-SocialMedia">
      <q-img
        src="~assets/header/logo_white.svg"
        style="height: 80px; max-width: 200px"
        fit="contain"
        class="img"
      />

      <FooterSocialMedia />
    </div>
    <FooterLinks />
    <FooterButtom />
    
  </footer>
</template>

<script>
import FooterSocialMedia from "./FooterSocialMedia.vue";
import FooterLinks from "./FooterLinks.vue";
import FooterButtom from "./FooterButtom.vue";
export default {
  components: {
    FooterSocialMedia,
    FooterLinks,
    FooterButtom,
  },
};
</script>

<style lang="sass" scoped>
.footer
  display: flex
  flex-direction: column
  text-align: center
  background: hsl(233, 26%, 24%)
  width: 100vw
  padding: 5em 0
@media (min-width: 1024px)
  .footer
    flex-direction: row
    text-align: center
    justify-content: space-around
    .content_img-SocialMedia
      width: 15em
</style>