<template>
  <b-container class="bv-example-row">
    <b-card
      :title="selectedMovie.title"
      :img-src="selectedMovie.url"
      img-alt="Image"
      style="max-width: 60rem;"
      class="mb-2"
    >
      <input
        class="mb-3"
        v-bind:value="shared_data.movies[id].title"
        v-on:input="shared_data.movies[id].title = $event.target.value"
      />
      <b-card-text>
        <p><b>Date de sortie : </b>{{ selectedMovie.date }}</p>
        <input
          v-bind:value="shared_data.movies[id].date"
          v-on:input="shared_data.movies[id].date = $event.target.value"
        />
      </b-card-text>
      
      <b-card-text>
        <p><b>Genre : </b>{{ selectedMovie.style }}</p>
        <input
          v-bind:value="shared_data.movies[id].style"
          v-on:input="shared_data.movies[id].style = $event.target.value"
        />
      </b-card-text>
      <b-card-text>
        <p><b>Langue : </b>{{ selectedMovie.language }}</p>
        <input
          v-bind:value="shared_data.movies[id].language"
          v-on:input="shared_data.movies[id].language = $event.target.value"
        />
      </b-card-text>
      <b-card-text>
        <p><b>Nom du réalisateur : </b>{{ selectedMovie.director.name }}</p>
        <input
          v-bind:value="shared_data.movies[id].director.name"
          v-on:input="shared_data.movies[id].director.name = $event.target.value"
        />
      </b-card-text>
      <b-card-text>
        <p><b>Nationalité du réalisateur : </b>{{ selectedMovie.director.nationality }}</p>
        <input
          v-bind:value="shared_data.movies[id].director.nationality"
          v-on:input="shared_data.movies[id].director.nationality = $event.target.value"
        />
      </b-card-text>
      <b-card-text>
        <p><b>Date de naissance du réalisateur : </b>{{ selectedMovie.director.birthdate }}</p>
        <input
          v-bind:value="shared_data.movies[id].director.birthdate"
          v-on:input="shared_data.movies[id].director.birthdate = $event.target.value"
        />
      </b-card-text>
      

      <router-link
        :to="{ name: 'movie_details', params: { id: selectedMovie.id } }"
        ><b-button variant="danger">Retour</b-button></router-link
      >
    </b-card>
  </b-container>
</template>

<script>
// import { movies } from '../data.js'

export default {
  data() {
    return {
      shared_data: window.shared_data,
      selectedMovie: shared_data.movies[this.$route.params.id],
      id: this.$route.params.id
    };
  },

  methods: {
    persistTitle(event) {
      shared_data.movies[id].title = $event.target.value;
      //   this.movies = this.moviesBase;
      //   this.displayReboot = false;
    }
  }
};
</script>
