<template>
  <section class="section1">
    <div class="animated fadeInRight slow section1_imgBefore">
      <img
        class="animated fadeInRight slow section1_imgBefore2"
        src="~assets/bg-intro-desktop.svg"
      />
      <img
        class="animated fadeInRight slower section1_imgAfter"
        src="~assets/image-mockups.png"
      />
    </div>
    <div class="content_titles">
      <h4 class="animated fadeInLeft slow title">
        Next generation digital bankign
      </h4>
      <p class="animated fadeInLeft slower subtitle">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much here.
      </p>
      <button class="animated fadeInUp slower btn q-mb-xl q-mt-xl">Request invite</button>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="sass" scoped>
.section1
  background: hsl(0, 0%, 98%)
  width: 100vw
.section1_imgBefore
  background: url('~assets/bg-intro-mobile.svg') no-repeat right
  position: relative
  top: -6.2em
  width: 100vw
  height: 70vh
  .section1_imgBefore2
    display: none
  .section1_imgAfter
    object-fit: contain
    position: absolute
    width: 100vw
    top: -6.2em
    height: 36em
.content_titles
  text-align: center
  position: relative
  .title
    font-weight: 700

@media (max-width: 425px)
  .content_titles
    text-align: center
    position: relative
    top: -6em

@media (min-width: 1024px)
  .section1_imgBefore
    display: inline-block
    background: hsl(0, 0%, 98%)
    .section1_imgBefore2
      position: relative
      display: block
      object-fit: contain
      top: -6em
      left: 27em
      width: 100vw
      height: 50em
    .section1_imgAfter
      top: 1em
      right: -24em
      height: 45em
  .content_titles
    display: inline-block
    text-align: left
    width: 25em
    margin-left: 2em
    top: -17em
@media (min-width: 1440px)
  .content_titles
    font-size: 20px
    top: -15em
</style>