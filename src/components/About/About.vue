<template>
  <!-- Footer -->
  <v-footer id="footer" app height="90" color="#333333">
    <v-col cols="12">
      <div id="footer-title">
        <span class="footer-subtitle" style="">Rejoignez </span>
        <strong>Emirates | The list</strong>
      </div>
      <div id="footer-subtitle">
        Vol + hôtel négociés jusqu'à -70%
      </div>
      <img class="black-red" width="250" height="3" src="@/assets/dash.png" alt="dash">
    </v-col>
  </v-footer>
</template>

<style scoped>
.black-red {
  filter: invert(35%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(80%) contrast(90%);
}
</style>
