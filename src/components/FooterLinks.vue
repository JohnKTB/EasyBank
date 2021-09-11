<template>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Tarjet</li>
    <li>Careers</li>
    <li>Support</li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
ul
  margin-right: 2em
  margin-top: 2em
  li
    list-style: none
    color: #fff
    font-weight: 600
    margin-bottom: 1em
@media (min-width: 1024px)
  ul
    display: grid
    grid-template-rows: repeat(1, 1fr)
    grid-template-columns: repeat(2, 1fr)
    li
      margin-right: 2em
</style>