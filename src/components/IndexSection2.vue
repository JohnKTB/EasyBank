<template>
  <section class="section2">
    <div class="section2_titles">
      <h4 class="section2_titles_title">Why choose Easybank?</h4>
      <p class="section2_titles_text">
        We leverage Open Baking to turn bank account into your financial hub.
        Control your finances like never before.
      </p>
    </div>
    <div class="content_articles">
      <div class="article">
        <q-img
          style="height: 80px; max-width: 80px"
          src="~assets/icon-online.svg"
        />
        <h4 class="section2_titles_title">Online Baking</h4>
        <p class="section2_titles_text">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div class="article">
        <q-img
          style="height: 80px; max-width: 80px"
          src="~assets/icon-budgeting.svg"
        />
        <h4 class="section2_titles_title">Simple Budgeting</h4>
        <p class="section2_titles_text">
          See exactly where your money goes each month. Receive notifications
          when your're close to your hitting limits.
        </p>
      </div>
      <div class="article">
        <q-img
          style="height: 80px; max-width: 80px"
          src="~assets/icon-onboarding.svg"
        />
        <h4 class="section2_titles_title">Fast Onboarding</h4>
        <p class="section2_titles_text">
          We don't do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
      <div class="article">
        <q-img
          style="height: 80px; max-width: 80px"
          src="~assets/icon-api.svg"
        />
        <h4 class="section2_titles_title">Open API</h4>
        <p class="section2_titles_text">
          Manage your savings, investments, pension, and much more from account.
          Tracking your money has never been easier.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.section2
  display: flex
  flex-direction: column
  justify-content: space-around
  text-align: center
  overflow: hidden
  padding: 0 2em
  width: 100vw
  background: hsl(220, 16%, 96%)
.section2_titles_title
  font-weight: 700
  text-align: center
.section2_titles_text
  font-weight: bold
  text-align: center
  color: hsl(233, 8%, 62%)
@media (min-width: 1024px)
  .section2
    display: block
    .section2_titles
      width: 35em
      margin-bottom: 4em
      .section2_titles_title
        text-align: left
      .section2_titles_text
        text-align: left
    .content_articles
      display: flex
      flex-direction: row
</style>