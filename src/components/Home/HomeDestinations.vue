<template>
  <div>
    <!-- Btn destinations -->
    <div style="text-align: center;">
      <v-btn class="ma-2" depressed  tile color="#FFFFFF" width="220" height="28">
        <strong>Destinations</strong>
      </v-btn> 
    </div>

    <!-- Progress for data loading -->
    <div v-if="! dataLoaded" style="text-align: center;">
      <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="padding-bottom: 180px;"></v-progress-circular>
    </div>

    <!-- Display of the destinations list -->
    <div v-show="dataLoaded" style="padding-bottom: 60px;">
      <v-container fluid>
        <v-row>
          <v-col v-for="destination in destinations" :key="destination.id"
                 xl="4" lg="4" md="4" sm="6" xs="12" cols="12">
            <!-- Destination -->
            <home-destinations-destination :destination="destination"></home-destinations-destination>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Bloc for inscription -->
    <inscription></inscription>
  </div>
</template>

<script>
import jsonDatas from '@/assets/data/destinations.js';
import Inscription from '@/components/Inscription/Inscription.vue';
import HomeDestinationsDestination from './HomeDestinationsDestination.vue';
export default {
  name: 'HomeDestinations',
  components: {
    Inscription,
    HomeDestinationsDestination
  },

  data() {
    return {
      destinations: jsonDatas,
      dataLoaded: false,
    }
  },
  created() {
    if (this.destinations && this.destinations.length) {
      this.dataLoaded = true;
    }
  }
};
</script>
