<template>
  <q-header elevated class="bg-white text-black">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <q-img
            src="~assets/header/logo.svg"
            style="height: 80%; width: 100%"
            fit="contain"
            class="animated fadeInLeft slow img"
          />
        </q-avatar>
      </q-toolbar-title>
      <HeaderAccount />
      <input type="checkbox" id="btn-menu" />
      <label for="btn-menu"><q-icon @click="clickMenu" :name="menu" /></label>
      <nav class="menu">
        <ul>
          <li><a @click="clickMenu" href="#/">Home</a></li>
          <li><a @click="clickMenu" href="#/about">About</a></li>
          <li><a @click="clickMenu" href="#/contact">Contact</a></li>
          <li><a @click="clickMenu" href="#/tarjet">Tarjet</a></li>
          <!-- <li><a href="#">Careers</a></li> -->
        </ul>
      </nav>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from "vue";
import HeaderAccount from "./HeaderAccount.vue";
export default {
  components: {
    HeaderAccount,
  },
  setup() {
    const menu = ref("menu");
    const clickMenu = () => {
      let $menu = document.querySelector(".menu");
      if (menu.value == "menu") {
        menu.value = "close";
        $menu.style.top = "70px";
      } else {
        menu.value = "menu";
        $menu.style.top = "-350px";
      }
    };
    return {
      menu,
      clickMenu,
    };
  },
};
</script>

<style lang="sass">
.q-avatar__content
  width: 10em
#btn-menu
  display: none

label
  display: none
  padding: 10px

.menu ul
  display: flex
  padding: 0

.menu li
  border-right: 1px solid #fff
  list-style: none

.menu li:hover
  background: rgba(0, 0, 0, .3)

.menu li a
  display: block
  text-decoration: none
  padding: 15px
  color: #000
  font-weight: bold

@media (max-width: 768px)

  label
    display: block

  .menu
    position: absolute
    background: #fff
    border-radius: 5px
    width: 80%
    text-align: center
    top: -350px
    right: 10%
    transition: all .5s

  .menu ul
    flex-direction: column
@media (min-width: 1024px)
  .q-avatar__content
    width: 15em
</style>