<template>
  <v-card flat>
    <!-- Images Sliders -->
    <v-carousel height="200" :next-icon="false" :prev-icon="false">
      <v-carousel-item v-for="(item, index) in images" :key="index"
        :src="item.src"
        reverse-transition="fade-transition" transition="fade-transition">
      </v-carousel-item>

      <!-- Upto -->
      <v-card-title>
        <div style="text-transform: uppercase; color: white;">
          <div style="position: absolute; bottom: 0; left: 10px;">
            <strong v-if="destination.place === 'Dubaï'" style="font-size: 25px;">{{ destination.place }}</strong>
          </div>
          <div style="position: absolute; bottom: 0; right: 10px;">
            <strong style="font-size: 15px;">{{ destination.upto }}</strong>
          </div>
        </div>
      </v-card-title>
    </v-carousel>

    <div style="display: flex;">
      <v-card-text>
        <!-- Country & Place -->
        <strong>{{ destination.country }}</strong> - <span>{{ destination.place }}</span>
        <!-- Rating -->
        <div style="margin-top: 3px; margin-bottom: 3px;">
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
          <span v-if="tag.classname === 'option'" style="background: #bd9c6a; color: white; padding: 2px;">
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
  props: {
    destination: { type: Object, default: null },
  },

  data() {
    return {
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>
