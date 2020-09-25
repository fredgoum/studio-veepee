<template>
  <div>
    <!-- Site navigation/header-->
    <navigation></navigation>
    <!-- Site content -->
    <home-destinations></home-destinations>
    <!-- Site footer -->
    <about></about>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation/Navigation.vue';
import About from '@/components/About/About.vue';
import HomeDestinations from './HomeDestinations.vue';
export default {
  name: 'Home',
  components: {
    Navigation,
    About,
    HomeDestinations,
  },
};
</script>
