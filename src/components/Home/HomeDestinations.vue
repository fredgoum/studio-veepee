<template>
  <div>
    <!-- Btn destinations -->
    <v-container style="width: 350px; color:red;">
      <div style="display: flex">
        <img src="@/assets/filter_icon.png" alt="filter icon" style="margin-top: 6px; height: 38px; cursor: pointer;"
             @click="selectedDestination = 'allCountries'">
        <v-overflow-btn v-model="selectedDestination" :items="destinationsList" label="DESTINATIONS" dense>
        </v-overflow-btn>
      </div>
    </v-container>

    <!-- Progress for data loading -->
    <div v-if="! dataLoaded" style="text-align: center;">
      <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="padding-bottom: 180px;"></v-progress-circular>
    </div>

    <!-- Display of the destinations list -->
    <div v-show="dataLoaded">
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

<style>
.v-overflow-btn.v-input--dense .v-select__slot {
  background-color: white;
}
.v-input__icon {
    position: absolute;
    top: 3px;
}
</style>

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
        { value: 'allCountries', text: 'AFFICHER TOUS LES PAYS' },
        { value: 'Emirates Arabes Unis', text: 'Emirates Arabes Unis' },
        { value: 'Maurice', text: 'Maurice' },
        { value: 'Indonésie', text: 'Indonésie' },
        { value: 'Maldives', text: 'Maldives' },
        { value: 'Thaïlande', text: 'Thaïlande' },
        { value: 'Sri Lanka', text: 'Sri Lanka' },
        { value: 'Japon', text: 'Japon' },
        { value: 'Vietnam', text: 'Vietnam' },
      ],
      country: "",
    }
  },
  computed: {
    // Country selected
    selectedDestination: {
      get() {
        return this.country;
      },
      set(newVal) {
        this.country = newVal;
      }
    },
    // Display destinations corressponding to country selected
    selectedDisplayDestinations() {
      if (! this.selectedDestination || this.selectedDestination === "allCountries") return this.destinations;
      return this.destinations.filter(destination => destination.country === this.selectedDestination);
    }
  },
  created() {
    if (this.destinations && this.destinations.length)  this.dataLoaded = true;
  },
};
</script>
