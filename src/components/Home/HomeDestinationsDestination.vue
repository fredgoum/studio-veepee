<template>
  <v-card flat>
    <!-- Destination Images Sliders -->
    <b-carousel indicators controls>
      <div v-for="(imgsrc, index) in destination.images" :key="index">
        <b-carousel-slide :img-src="imgsrc" ></b-carousel-slide>
      </div>
      <!-- Upto in sliders -->
      <div id="upto">
        <div id="destination-place">
          <strong v-if="destination.place === 'Dubaï'" style="font-size: 25px;">
            {{ destination.place }}
          </strong>
        </div>
        <div id="destination-upto">
          <strong style="font-size: 12px;">{{ destination.upto }}</strong>
        </div>
      </div>
    </b-carousel>

    <!-- Destination Infos -->
    <div class="display-flex" style="margin-top: -8px;">
      <v-card-text style="margin-bottom: -8px;">
        <!-- Country & Place -->
        <strong>{{ destination.country }}</strong> - <span>{{ destination.place }}</span>
        <!-- Rating -->
        <div id="rating">
          <span id="rating-label">{{ destination.label }}</span>
          <span v-for="(val, index) in parseInt(destination.rating.charAt(0), 10)" :key="index">
            <v-icon x-small color="#000000">star</v-icon>
          </span>
        </div>
        <!-- tags -->
        <span id="tags" v-for="(tag, index) in destination.tags" :key="index">
          <span id="tags-premium" v-if="tag.classname === 'premium'">
            {{ tag.label}}
          </span>
          <span id="tags-option" v-if="tag.classname === 'option'">
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
