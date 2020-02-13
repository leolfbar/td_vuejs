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
        <p><b>Réalisateur : </b>{{ selectedMovie.director }}</p>
      </b-card-text>
      <b-card-text>
        <p><b>Synopsys : </b>{{ selectedMovie.synopsys }}</p>
      </b-card-text>

      <router-link
        :to="{ name: 'edit_movie', params: { id: selectedMovie.id } }"
        ><b-button variant="success">Editer</b-button></router-link
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
