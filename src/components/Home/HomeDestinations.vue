<template>
  <div>
    <!-- Destinations Filter -->
    <v-container id="filter">
      <div class="display-flex">
        <img id="filter-icon" src="@/assets/filter_icon.png" alt="filter icon"
             @click="selectedDestination = 'AFFICHER TOUS LES PAYS'">
             
        <b-dropdown id="dropdown" :text="selectedDestination" variant="transparent">
          <div v-for="(item, index) in destinationsList" :key="index">
            <b-dropdown-item @click="selectedDestination=item">{{ item }}</b-dropdown-item>
          </div>
      </b-dropdown>
      </div>
    </v-container>

    <!-- Progress for data loading -->
    <div v-if="! dataLoaded" class="text-center">
      <v-progress-circular id="progress-circular" :size="80" :width="7" indeterminate></v-progress-circular>
    </div>

    <!-- Display of the destinations list -->
    <div v-show="dataLoaded" id="destinations-list">
      <v-container fluid>
        <v-row>
          <v-col v-for="destination in selectedDisplayDestinations" :key="destination.id"
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
      destinationsList: [
        'AFFICHER TOUS LES PAYS',
        'Emirates Arabes Unis',
        'Maurice',
        'Indonésie',
        'Maldives',
        'Thaïlande',
        'Sri Lanka',
        'Japon',
        'Vietnam',
      ],
      country: 'DESTINATIONS',
    }
  },
  computed: {
    // Selected country
    selectedDestination: {
      get() {
        return this.country;
      },
      set(newVal) {
        this.country = newVal;
      }
    },
    // Display destinations for selected country
    selectedDisplayDestinations() {
      if (this.selectedDestination === "DESTINATIONS") return this.destinations;
      if (this.selectedDestination === "AFFICHER TOUS LES PAYS") return this.destinations;
      return this.destinations.filter(destination => destination.country === this.selectedDestination);
    }
  },
  created() {
    if (this.destinations && this.destinations.length) this.dataLoaded = true;
  },
};
</script>
