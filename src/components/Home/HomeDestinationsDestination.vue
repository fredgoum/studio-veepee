<template>
  <v-card flat>
    <!-- Destination Images Sliders -->
    <v-carousel height="160" hide-delimiters>
      <v-carousel-item v-for="(imgsrc, index) in destination.images" :key="index" 
                       :src="imgsrc"
                       reverse-transition="fade-transition" transition="fade-transition">
      </v-carousel-item>
      <!-- Upto in sliders-->
      <v-card-title>
        <div style="text-transform: uppercase; color: white;">
          <div style="position: absolute; bottom: 0; left: 10px;">
            <strong v-if="destination.place === 'Dubaï'" style="font-size: 25px;">
              {{ destination.place }}
            </strong>
          </div>
          <div style="position: absolute; bottom: 0; right: 10px;">
            <strong style="font-size: 12px;">{{ destination.upto }}</strong>
          </div>
        </div>
      </v-card-title>
    </v-carousel>

    <!-- Destination Infos -->
    <div style="display: flex; margin-top: -8px;">
      <v-card-text style="margin-bottom: -8px;">
        <!-- Country & Place -->
        <strong>{{ destination.country }}</strong> - <span>{{ destination.place }}</span>
        <!-- Rating -->
        <div style="margin-top: -5px; margin-bottom: -2px;">
          <span style="font-size: 12px; margin-right: 3px;">{{ destination.label }}</span>
          <span v-for="(val, index) in parseInt(destination.rating.charAt(0), 10)" :key="index">
            <v-icon x-small color="#000000">star</v-icon>
          </span>
        </div>
        <!-- tags -->
        <span v-for="(tag, index) in destination.tags" :key="index" style="text-transform: uppercase; font-size: 11px;">
          <span v-if="tag.classname === 'premium'"
                style="margin-right: 5px; background: #000000; color: white; padding: 2px;">
            {{ tag.label}}
          </span>
          <span v-if="tag.classname === 'option'"
                style="background: #bd9c6a; color: white; padding: 2px;">
            {{ tag.label}}
          </span>
        </span>
      </v-card-text>

      <!-- Btn see more -->
      <v-card-actions>
        <v-btn small depressed tile color="#ed3323" style="color: white;">
          <v-icon large>navigate_next</v-icon>
        </v-btn> 
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HomeDestinationsDestination',
  props: {
    destination: { type: Object, default: null },
  },
};
</script>
