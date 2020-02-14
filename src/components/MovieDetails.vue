<template>
  <b-container class="bv-example-row">
    <b-card
      :title="selectedMovie.title"
      :img-src="selectedMovie.url"
      img-alt="Image"
      style="max-width: 60rem;"
      class="mb-2"
    >
      <b-card-text>
        <p><b>Date de sortie : </b>{{ selectedMovie.date }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Genre : </b>{{ selectedMovie.style }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Langue : </b>{{ selectedMovie.language }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Nom du réalisateur : </b>{{ selectedMovie.director.name }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Nationalité du réalisateur : </b>{{ selectedMovie.director.nationality }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Date de naissance du réalisateur : </b>{{ selectedMovie.director.birthdate }}</p>
      </b-card-text>
      

      
      
           <router-link
           class="mr-2"
        :to="{ name: 'edit_movie', params: { id: selectedMovie.id } }"
        ><b-button variant="success">Editer</b-button></router-link
      >
      <router-link
        class="ml-2"
        :to="{ name: 'movies', params: { id: selectedMovie.id } }"
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
      selectedMovie: shared_data.movies[this.$route.params.id]
    };
  }
};
</script>

<style>
.b-card {
  text-align: center;
}
</style>
