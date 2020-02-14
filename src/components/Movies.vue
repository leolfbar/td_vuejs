<template>
  <div>
    <!-- end navbar -->

    <!-- <select v-model="searchBy">
      <option value="title">Titre</option>
      <option value="date">Date</option>
      <option value="director">Réalisateur</option>
    </select> -->

    <b-container class="bv-example-row">
      <b-row class="mb-5">
        <b-input-group>
          <b-form-input v-model="searchWord" />

          <b-input-group-append>
            <b-form-select v-model="searchBy" :options="options"
              >Filtre</b-form-select
            >
            <b-button variant="warning" v-on:click="search">Recherche</b-button>

            <b-button v-if="displayReboot" v-on:click="reboot" variant="danger"
              >Réinitialiser</b-button
            >
          </b-input-group-append>
        </b-input-group>
        </b-row>
        <b-row>
        <b-col cols="4" v-for="m in shared_data.movies" v-bind:key="m.title">
          <b-card
            :title="m.title"
            img-alt="Affiche du film"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-2"
            :img-src="m.url"
          >
            <b-card-text>
              <router-link :to="{ name: 'movie_details', params: { id: m.id } }"
                ><b-button variant="warning">Détails</b-button></router-link
              >
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- <p>Nombre de films : {{ shared_data.movies.length }}</p> -->
  </div>
</template>
!
<script>
// import { movies } from '../data.js'
export default {
  data() {
    return {
      shared_data: window.shared_data,
      selected: "title",
      options: [
        { value: "title", text: "Titre" },
        { value: "date", text: "Date" },
        { value: "director", text: "Réalisateur" }
      ],
      // movies: movies,
      moviesBase: "",
      searchWord: "",
      displayReboot: false,
      searchBy: "title",
      sortTitle: "",
      sortDate: "",
      sortDirector: "",
      sortSynopsys: "",
      IdRemoveMovie: 0
    };
  },
  methods: {
    //  showDetails(index) {
    //    this.movies[index].displayDetails = !this.movies[index].displayDetails;
    //  },
    search() {
      if (this.searchBy == "title") {
        this.moviesBase = this.shared_data.movies;
        this.shared_data.movies = this.shared_data.movies.filter(
          m => m.title == this.searchWord
        );
        this.displayReboot = true;
      } else if (this.searchBy == "date") {
        this.moviesBase = this.shared_data.movies;
        this.shared_data.movies = this.shared_data.movies.filter(
          m => m.date == this.searchWord
        );
        this.displayReboot = true;
      } else if (this.searchBy == "director") {
        this.shared_datamoviesBase = this.shared_data.movies;
        this.shared_data.movies = this.shared_data.movies.filter(
          m => m.director.name == this.searchWord
        );
        this.displayReboot = true;
      }
    },
    reboot() {
      this.shared_data.movies = this.moviesBase;
      this.displayReboot = false;
    }
  }
};
</script>
